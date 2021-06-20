const INITIAL_STATE = {
  searchField: '',
};

const searchFieldReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_SEARCH_FIELD':
      return {
        ...state,
        searchField: action.payload,
      };
    default:
      return state;
  }
};

export default searchFieldReducer;
