import { ADD_MOVIES } from "../actions";

const initalMoviesState = {
  list: [],
  favourites: [],
};
export default function movies(state = initalMoviesState, action) {
  if (action.type === ADD_MOVIES) {
    return {
      ...state,
      list: action.movies,
    };
  }
  return state;
}

// const ADD_MOVIES = "ADD_MOVIES";
