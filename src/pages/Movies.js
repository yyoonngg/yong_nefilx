import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import MovieCard from "../components/MovieCard";
import MoviesPageCard from "../components/MoviesPageCard";

const Movies = () => {
  const { popularMovies, loading } = useSelector((state) => state.movie);
  if (loading) {
    return (
      <div className="loading-spinner">
        <ClipLoader color="#ffff" loading={loading} size={150} />
      </div>
    );
  }
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <div className="movies_option">
            <div>Sort</div>
            <div>→</div>
          </div>
          <div className="movies_option">
            <div>Filter</div>
            <div>→</div>
          </div>
        </Col>
        <Col lg={8}>
          <Row>
            {popularMovies.results && 
            popularMovies.results.map((item)=> (
              <Col lg={6} className="movies_card_area">
                <MoviesPageCard item={item}/>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Movies;
