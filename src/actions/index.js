import axios from "axios";
import moment from "moment";
export function loadRepoData() {
  let date = moment().subtract(31, "days").format("YYYY-MM-DD");
  let map = new Map();

  return (dispatch) => {
    return axios
      .get(
        `https://api.github.com/search/repositories?q=created:?>${date}&sort=stars&order=desc`
      )
      .then((response) => {
        dispatch(loadData(response.data.items));
        response.data.items.forEach((item) => {
          axios.get(item.languages_url).then((response) => {
            const names = Object.keys(response.data);

            names.forEach((name) => {
              if (map.has(name)) {
                let data = map.get(name);
                let count = ++data.count;
                let repos = data.repos;
                repos.push(item);
                map.set(name, { count, repos });
              } else map.set(name, { count: 1, repos: [item] });
            });
            Promise.all(names).then((res) => {
              dispatch(loadLanguage(map));
            });
          });
        });
      });
  };
}

export function loadData(repoData) {
  return {
    type: "LOAD_DATA",
    repoData: repoData,
  };
}
export function loadLanguage(payload) {
  return {
    type: "ADD_LANGUAGE",
    payload: payload,
  };
}
