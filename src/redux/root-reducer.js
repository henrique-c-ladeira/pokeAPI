import { combineReducers } from 'redux';

import searchFieldReducer from './search-field/search-field.reducer';

export default combineReducers({
  searchField: searchFieldReducer
});
