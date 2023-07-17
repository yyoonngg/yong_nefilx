import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { movieAction } from "../redux/actions/MovieAction";
import DetailPageBanner from "../components/DetailPageBanner";
import DetailMovieInfo from "../components/DetailMovieInfo";
import { Button, Container } from "react-bootstrap";
import Review from "../components/Review";
import RelatedMovies from "../components/RelatedMovies";

const MovieDetail = () => {
  const { detailMovie, movieReview, relatedMovies, loading } = useSelector(
    (state) => state.movie
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (detailMovie.id) {
      dispatch(movieAction.getMovieVideoId(detailMovie.id));
      dispatch(movieAction.getMovieReview(detailMovie.id));
      dispatch(movieAction.getRelatedMovies(detailMovie.id));
    }
  }, [detailMovie]);

  const showBottomInfo = (e) => {
    let related = document.getElementById("relatedMovieArea");
    let review = document.getElementById("reviewArea");
    let relatedBtn = document.getElementById("relatedBtn");
    let reviewBtn = document.getElementById("reviewBtn");

    if (e.target.innerText == "Review") {
      related.style.display = "none";
      relatedBtn.classList.remove("active");
      review.style.display = "block";
      reviewBtn.classList.add("active");
    } else if (e.target.innerText == "Related Movies") {
      review.style.display = "none";
      reviewBtn.classList.remove("active");
      related.style.display = "block";
      relatedBtn.classList.add("active");
    }
  };

  if (loading) {
    return (
      <div className="loading-spinner">
        <ClipLoader color="#ffff" loading={loading} size={150} />
      </div>
    );
  }
  return (
    <Container className="ps-5 pe-5">
      <DetailPageBanner detailMovie={detailMovie} />
      <DetailMovieInfo detailMovie={detailMovie} />
      <div className="mt-5">
        <Button
          variant="light"
          className="detail-bottom-Btn active"
          id="reviewBtn"
          onClick={showBottomInfo}
        >
          Review
        </Button>
        <Button
          variant="light"
          className="detail-bottom-Btn"
          id="relatedBtn"
          onClick={showBottomInfo}
        >
          Related Movies
        </Button>
      </div>
      {movieReview.results && <Review movieReview={movieReview} />}
      {relatedMovies.results && <RelatedMovies relatedMovies={relatedMovies} />}
    </Container>
  );
};

export default MovieDetail;
