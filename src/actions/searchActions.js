/**
 * Created by Radu on 25.06.2017.
 */
import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import * as search from '../components/common/searchAPI';

export function loadSearchResults(results) {
  return {type: types.LOAD_SEARCH_RESULTS, results};
}

// Functions below handle asynchronous calls.
// Each returns a function that accepts a dispatch.
// These are used by redux-thunk to support asynchronous interactions.

export function searchVideos(term) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return search.youtubeSearch(term).then(results => {
      return results.json();
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
