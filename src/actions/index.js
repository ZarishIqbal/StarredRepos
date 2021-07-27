import axios from "axios";
import moment from "moment";
const auth = {
  username: "zarish97",
  password: "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",
};
const BASE_URL = "https://api.github.com/search/repositories?";

//fetching data from api
export function loadRepoData(page, pagination) {
  let map = new Map();
  let date = moment().subtract(31, "days").format("YYYY-MM-DD");
  let url = `${BASE_URL}q=created:?>${date}&sort=stars&order=desc&page=${page}`; //date set for previous 30 days for language

  return (dispatch) => {
    return axios
      .get(url, {
        auth: auth,
      })
      .then((response) => {
        dispatch(loadData(response.data, pagination));

        !pagination &&
          response.data.items.forEach((item) => {
            axios
              .get(item.languages_url, {
                auth: auth,
              })
              .then((response) => {
                const names = Object.keys(response.data);

                names.forEach((name) => {
                  if (map.has(name)) {
                    let data = map.get(name);
                    let values = {
                      count: ++data.count,
                      repos: data.repos,
                    };

                    values.repos.push(item);
                    map.set(name, values);
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

export function loadData(repoData, pagination) {
  if (pagination) {
    return {
      type: "ADD_DATA",
      repoData: repoData.items,
      hasMore: repoData.incomplete_results,
    };
  }

  return {
    type: "LOAD_DATA",
    repoData: repoData.items,
    hasMore: repoData.incomplete_results,
  };
}

export function loadLanguage(payload) {
  return {
    type: "ADD_LANGUAGE",
    payload: payload,
  };
}
