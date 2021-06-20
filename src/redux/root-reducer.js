import { combineReducers } from 'redux';

import searchFieldReducer from './modules/search-field/search-field.reducer';

export default combineReducers({
  searchField: searchFieldReducer,
});
