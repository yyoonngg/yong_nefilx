let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upcomingMovies: {},
  loading: true,
  genreList: [],
  detailMovie: {},
  videoId: {},
  movieReview: {},
  relatedMovies: {},
};

function movieReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_MOVIE_SUCCESS":
      return {
        ...state,
        popularMovies: payload.popularMovies,
        topRatedMovies: payload.topRatedMovies,
        upcomingMovies: payload.upcomingMovies,
        genreList: payload.genreList,
        loading: false,
        //detailMovie : payload.detailMovie,
      };
    case "GET_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_MOVIE_FAILURE":
      return {
        ...state,
        loading: false,
      };
    case "GET_DETAIL_MOVIE_SUCCESS":
      return {
        ...state,
        detailMovie: payload.detailMovie,
        loading: false,
      };
    case "GET_VIDEO_ID":
      return {
        ...state,
        videoId: payload.videoId,
        loading: false,
      };
    case "GET_MOVIE_REVIEWS":
      return {
        ...state,
        movieReview: payload.movieReview,
        loading: false,
      };
    case "GET_RELATED_MOVIES":
      return {
        ...state,
        relatedMovies: payload.relatedMovies,
        loading: false,
      };
    default:
      return { ...state };
  }
}

export default movieReducer;
