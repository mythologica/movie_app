import React from "react";
import PropTypes from "prop-types";

MovieItem.propTypes = {
  movieName: PropTypes.string.isRequired,
  moviePhoto: PropTypes.string.isRequired,
};

const movieList = [
  {
    key: 1,
    movieName: "로마의 휴일",
    moviePhoto:
      "https://lh3.googleusercontent.com/proxy/BuHfFafONtNQkOYZz_-m67ry7Esos8VbQ9b_99oHlm8jNjdvxXv1YeisqEQbgDnfwDDOe_u-B0RncquGCo_oXxUhBKwO3tp_5nU4AH_tGfJBzc0oBmtezVVYAl4JiZ83IRnXwBRmsw",
  },
  {
    key: 2,
    movieName: "메트릭스",
    moviePhoto: null,
  },
  {
    key: 3,
    movieName: "기생충",
    moviePhoto:
      "https://img9.yna.co.kr/photo/cms/2019/08/03/08/PCM20190803000008005_P2.jpg",
  },
  {
    key: 4,
    movieName: "나비효과",
    moviePhoto:
      "https://img9.yna.co.kr/photo/cms/2019/08/03/08/PCM20190803000008005_P2.jpg",
  },
];

function MovieTitle() {
  return <h2>Movie</h2>;
}

//function MovieItem(props) {
function MovieItem({ movieName, moviePhoto }) {
  return (
    <>
      <h2>{movieName}</h2>
      <img src={moviePhoto} alt={movieName} />
    </>
  );
}

/*
function renderMovie(movieItem) {
  return (
    <MovieItem
      key={movieItem.key}
      movieName={movieItem.movieName}
      moviePhoto={movieItem.moviePhoto}
    />
  );
}
*/
const renderMovie = (movieItem) => (
  <MovieItem
    key={movieItem.key}
    movieName={movieItem.movieName}
    moviePhoto={movieItem.moviePhoto}
  />
);

function Movie() {
  console.log("renderMovie", movieList.map(renderMovie));
  // return <div className="App"></div>;
  return (
    <>
      <div>Hello React~!</div>
      <MovieTitle />
      {movieList.map(renderMovie)}
    </>
  );
  /*
  return (
    <>
      <div>Hello React~!</div>
      <Movie />
      {movieList.map((movieItem) => (
        <MovieItem
          key={movieItem.key}
          movieName={movieItem.movieName}
          moviePhoto={movieItem.moviePhoto}
        />
      ))}
    </>
  );
  */
}

export default Movie;
