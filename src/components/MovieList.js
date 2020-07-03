import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Loading from "./Loading";
import "../style/Movie.css";
import { Link } from "react-router-dom";

class MovieList extends React.Component {
  id = 1;

  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    // const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
    // console.log("movies", movies?.data?.data?.movies);
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    );
    // console.log("movies", movies);
    this.setState({
      movies,
      isLoading: false,
    });
  };

  delayLoad = () => {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 3000);
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader-text">Loading</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              return (
                <MovieItem
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

function MovieItem({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <Link
        to={{
          pathname: "/movie_detail",
          state: { id, title, year, summary, poster, genres },
        }}
      >
        <img src={poster} alt={title} title={title} className="movie-poster" />
        <div className="movie-data">
          <h3 className="movie-title">{title}</h3>
          <h5 className="movie-year">{year}</h5>
          <ul>
            {genres.map((genre, index) => {
              return (
                <li key={index} className="movie-genre">
                  {genre}
                </li>
              );
            })}
          </ul>
          <p className="movie-summary">{summary.slice(0, 180)}....</p>
        </div>
      </Link>
    </div>
  );
}

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieList;
