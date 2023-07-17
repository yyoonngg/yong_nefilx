import axios from "axios";
import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
function getRelatedMovies(id) {
  return async (dispatch) => {
    dispatch({ type: "GET_MOVIES_REQUEST" });
    const relatedMoviesApi = api.get(`/movie/${id}/similar?api_key=${API_KEY}language=en-US&page=1`);
    let relatedMovies = await relatedMoviesApi;
    dispatch({
      type: "GET_RELATED_MOVIES",
      payload: { relatedMovies: relatedMovies.data },
    });
  };
}

function getMovieReview(id) {
  return async (dispatch) => {
    dispatch({ type: "GET_MOVIES_REQUEST" });
    const movieReviewApi = api.get(
      `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    let movieReview = await movieReviewApi;
    dispatch({
      type: "GET_MOVIE_REVIEWS",
      payload: { movieReview: movieReview.data },
    });
  };
}
function getDetailMovie(id) {
  return async (dispatch) => {
    dispatch({ type: "GET_MOVIES_REQUEST" });
    const detailMovieApi = api.get(
      `/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    let detailMovie = await detailMovieApi;
    dispatch({
      type: "GET_DETAIL_MOVIE_SUCCESS",
      payload: { detailMovie: detailMovie.data },
    });
  };
}
function getMovieVideoId(id) {
  return async (dispatch) => {
    dispatch({ type: "GET_MOVIES_REQUEST" });
    const videoIdApi = api.get(
      `/movie/${id}/videos?api_key=${API_KEY}&language=en`
    );
    let videoId = await videoIdApi;
    dispatch({
      type: "GET_VIDEO_ID",
      payload: { videoId: videoId.data },
    });
  };
}
function getMovies() {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
      const popularMovieApi = api.get(
        `/movie/popular?api_key=${API_KEY}&language=en&page=1`
      );
      const topRatedApi = api.get(
        `/movie/top_rated?api_key=${API_KEY}&language=en&page=1`
      );
      const upcomingApi = api.get(
        `/movie/upcoming?api_key=${API_KEY}&language=en&page=1`
      );
      const genreApi = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=en`
      );
      //const detailMovieApi = api.get(`/movie/502356?api_key=${API_KEY}&language=en-US`);
      let [
        popularMovies,
        topRatedMovies,
        upcomingMovies,
        genreList,
        //detailMovie,
      ] = await Promise.all([
        popularMovieApi,
        topRatedApi,
        upcomingApi,
        genreApi,
        //detailMovieApi,
      ]);
      dispatch({
        type: "GET_MOVIE_SUCCESS",
        payload: {
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upcomingMovies: upcomingMovies.data,
          genreList: genreList.data.genres,
          //detailMovie: detailMovie.data,
        },
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: "GET_MOVIE_FAILURE" });
    }
  };
}
export const movieAction = {
  getMovies,
  getDetailMovie,
  getMovieVideoId,
  getMovieReview,
  getRelatedMovies,
};
