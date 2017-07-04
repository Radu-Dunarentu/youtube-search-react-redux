import * as types from './actionTypes';

export function addToFavorite(video) {
  return {type: types.ADD_FAVORITE, video};
}

export function removeFromFavorite(video) {
  return {type: types.REMOVE_FAVORITE, video};
}

