
let defaultState = {
    repoData: [],
    languages: [{
        noOfRepos: 0,
        listOfRepos: [],
        popularity: 0
    }]

}
const mainReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "LOAD_DATA": {
            return {
                ...state,
                repoData: action.repoData
            }
        }
        case "ADD_LANGUAGE": {
            return {
                ...state,
                languages: action.payload
            }
        }


        default:
            return state

    }
}
export default mainReducer