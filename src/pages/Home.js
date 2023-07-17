import React, { useEffect } from "react";
import { movieAction } from "../redux/actions/MovieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";
import { Container } from "react-bootstrap";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies, loading } =
    useSelector((state) => state.movie);
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  if (loading) {
    return (
      <div className="loading-spinner">
        <ClipLoader color="#ffff" loading={loading} size={150} />
      </div>
    );
  }
  return (
    <div>
      <Banner movie={popularMovies.results[0]} />
      <Container>
        <h1 className="mt-5 mb-3 home-title">가장 인기있는 영화</h1>
        <MovieSlide movies={popularMovies} />
        <h1 className="mt-5 mb-3 home-title">지금 뜨는 콘텐츠</h1>
        <MovieSlide movies={topRatedMovies} />
        <h1 className="mt-5 mb-3 home-title">개봉 예정작</h1>
        <MovieSlide movies={upcomingMovies} />
      </Container>
    </div>
  );
};

export default Home;
