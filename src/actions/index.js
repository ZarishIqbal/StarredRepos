import axios from 'axios';
import moment from 'moment'
export function loadRepoData() {
    let date = moment().subtract(30, "days").format("YYYY-MM-DD");
    let map = new Map();

    return (dispatch) => {
        return axios.get(`https://api.github.com/search/repositories?q=created:?>${date}&sort=stars&order=desc`).then((response) => {
            console.log(response.data)
            dispatch(loadData(response.data.items))
            response.data.items.map((item) => {
                axios.post(`https:localhost:9000/githubAPI`, { url: item.languages_url, }, {
                    headers: {
                        'Access-Control-Allow-Origin': 'http://localhost:3000',
                        'Access-Control-Allow-Credentials': 'true'
                    }
                }).then((response) => {
                    console.log(response.data)
                })
                //     axios.get(item.languages_url, { headers: { username: "zarish97" } }).then((response) => {
                //         const names = Object.keys(response.data);

                //         names.forEach((name) => {
                //             if (map.has(name)) {
                //                 let data = map.get(name)
                //                 let count = ++data.count;
                //                 let repos = data.repos;
                //                 repos.push(item.url);
                //                 map.set(name, { count, repos })
                //             }
                //             else
                //                 map.set(name, { count: 1, repos: [item.url] });

                //         })
                //         Promise.all(names).then((res) => {
                //             console.log(map)
                //             dispatch(loadLanguage(map))
                //         })
                //     })
            })

        })
    }
}

export function loadData(repoData) {
    return {
        type: "LOAD_DATA",
        repoData: repoData
    }
}
export function loadLanguage(payload) {
    return {
        type: "ADD_LANGUAGE",
        payload: payload
    }
}
