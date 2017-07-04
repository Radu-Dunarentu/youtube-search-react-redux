import { combineReducers } from 'redux';
import searchResults from './searchReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import favorites from './favoritesReducer';

const rootReducer = combineReducers({
  searchResults,
  favorites,
  ajaxCallsInProgress
});

export default rootReducer;
