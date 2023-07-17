import React from "react";
import { Row, Col } from "react-bootstrap";
import MovieCard from "./MovieCard";

const RelatedMovies = ({ relatedMovies }) => {
  console.log(relatedMovies);
  return (
    <div id="relatedMovieArea" className="related-box">
      <Row>
        {relatedMovies.results &&
          relatedMovies.results.map((item) => (
            <Col lg={6} sm={2} className="related-card">
              <MovieCard item={item} />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default RelatedMovies;
