import * as types from '../actions/actionTypes';
import initialState from './initialState';
import toastr from 'toastr';

export default function favorites(state = initialState.favorites, action) {
  switch (action.type) {
    case types.ADD_FAVORITE:
      if (state.find(e => e.id === action.video.id)) {
        toastr.warning('Video already in favorites!');
        return state;
      } else {
        toastr.success('Video added to favorites!');
        return [...state, action.video];
      }

    case types.REMOVE_FAVORITE:
      toastr.success('Video removed from favorites!');
      return [...state.filter(video => video.id !== action.video.id)];

    default:
      return state;
  }
}
