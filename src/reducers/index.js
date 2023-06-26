import { combineReducers } from "redux";

import {
  ADD_MOVIES,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
  SET_SHOW_FAVOURITES,
} from "../actions";

const initalMoviesState = {
  list: [],
  favourites: [],
  showFavourites: false,
};
export function movies(state = initalMoviesState, action) {
  console.log("MOVIES REDUCER");

  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
        showFavourites: false,
      };

    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
        showFavourites: false,
      };

    case REMOVE_FAVOURITE:
      const filteredArray = state.favourites.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        favourites: filteredArray,
        showFavourites: false,
      };

    case SET_SHOW_FAVOURITES:
      return {
        ...state,
        showFavourites: action.val,
      };

    default:
      return state;
  }
}

// Creating search reducer

// *** Note: The api we are using for getting movie search result will only return one object***
const initialSearchState = {
  result: {},
};

export function search(state = initialSearchState, action) {
  console.log("SEARCH REDUCER");
  return state;
}

// Creating Main reducer -> rootReducer

// const initialRootState = {
//   movies: initalMoviesState,
//   search: initialSearchState,
// };

// export function rootReducer(state = initialRootState, action) {
//   return {
//     movies: movies(state.movies, action),
//     search: search(state.search, action),
//   };
// }

export default combineReducers({
  movies: movies, // combineReducers calls our reducer function, here movies like this only internally -> movies(state.movies, action)
  search: search, // combineReducers calls our reducer function, here movies like this only internally -> search(state.search, action)
});
