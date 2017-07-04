/**
 * Created by Radu on 25.06.2017.
 */
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function search(state = initialState.searchResults, action) {
  switch (action.type) {
    case types.LOAD_SEARCH_RESULTS:
      return action.results;

    default:
      return state;
  }
}
