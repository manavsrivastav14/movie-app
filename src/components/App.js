import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourites } from "../actions";
import { connect } from "../index";

class App extends React.Component {
  componentDidMount() {
    // const { store } = this.props;
    // store.subscribe(() => {
    //   console.log("Updated");
    //   this.forceUpdate();
    //   console.log("State: ", store.getState());
    // });
    // //make api call to get movies in real world scenario

    // // Dispatch action
    // store.dispatch(addMovies(data));

    // console.log("State: ", store.getState());

    this.props.dispatch(addMovies(data));
  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props;

    const index = movies.favourites.indexOf(movie);

    if (index !== -1) {
      //Movie Found
      return true;
    }
    return false;
  };

  onChangeTab = (val) => {
    this.props.dispatch(setShowFavourites(val));
  };

  render() {
    const { movies, search } = this.props; //{movies:{}, search: {}}
    console.log("movies", movies);
    const { list, favourites = [], showFavourites = [] } = movies; // {list: [], favourites: []}
    console.log("RENDER");
    const displayMovies = showFavourites ? favourites : list;

    return (
      <div className="App">
        <Navbar search={search} />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? "active-tabs" : ""}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favourites
            </div>
          </div>

          <div className="List">
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
            {displayMovies.length === 0 && (
              <div className="no-movies">No Movies added to favourites </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies,
    search: state.search,
  };
}
const connectedAppComponent = connect(mapStateToProps)(App);
export default connectedAppComponent;

// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => {
//           return <App store={store} />;
//         }}
//       </StoreContext.Consumer>
//     );
//   }
// }
// export default AppWrapper;
