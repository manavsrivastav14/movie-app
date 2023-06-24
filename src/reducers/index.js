import { ADD_MOVIES } from "../actions";
import {
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
  SET_SHOW_FAVOURITES,
} from "../actions";

const initalMoviesState = {
  list: [],
  favourites: [],
  showFavourites: false,
};
export default function movies(state = initalMoviesState, action) {
  // if (action.type === ADD_MOVIES) {
  //   return {
  //     ...state,
  //     list: action.movies,
  //   };
  // }
  // return state;

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

// const ADD_MOVIES = "ADD_MOVIES";
