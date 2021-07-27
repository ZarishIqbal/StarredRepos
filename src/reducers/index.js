//default state
let defaultState = {
  repoData: [],
  languages: new Map(),
  hasMore: true,
};

//main reducers
const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOAD_DATA": {
      return {
        ...state,
        repoData: action.repoData,
        hasMore: action.hasMore,
      };
    }
    case "ADD_DATA": {
      return {
        ...state,
        repoData: state.repoData.concat(action.repoData),
        hasMore: action.hasMore,
      };
    }
    case "ADD_LANGUAGE": {
      return {
        ...state,
        languages: action.payload,
      };
    }

    default:
      return state;
  }
};
export default mainReducer;
