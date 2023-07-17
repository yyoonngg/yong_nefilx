import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Trailer from "./Trailer";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faStar, faUsers } from "@fortawesome/free-solid-svg-icons";

const DetailMovieInfo = ({ detailMovie }) => {
  const { genreList, videoId } = useSelector((state) => state.movie);
  return (
    <section className="mt-5">
      <Row>
        <Col xl={6} lg={6} className="single-poster-area">
          <div>
            <img
              className="singleMovie-poster"
              src={`https://www.themoviedb.org/t/p/original//${detailMovie.poster_path}`}
            />
          </div>
        </Col>

        <Col xl={6} lg={6}>
          <div>
            {detailMovie.genres.map((genre) => (
              <Badge bg="danger" className="detail-movie-genre">
                {genreList.find((item) => genre.id == item.id).name}
              </Badge>
            ))}
          </div>
          <div className="detail-movie-title">{detailMovie.title}</div>
          <div className="detail-movie-tagline">{detailMovie.tagline}</div>
          <ul className="movie-detail-info mt-5">
            <li className="detail-movie-vote">
              <FontAwesomeIcon icon={faStar} style={{ color: "#ff0000" }} />
              <span> {detailMovie.vote_average.toFixed(1)}</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faUsers} style={{ color: "#ffea80" }} />
              <span> {detailMovie.popularity}</span>
            </li>
            <li className="detail-movie-adult">
              {!detailMovie.adult && <span>Under 18</span>}
            </li>
          </ul>
          <div className="detail-movie-overview mt-5 pb-5">{detailMovie.overview}</div>

          <ul className="detail-movie-additional-info">
            <li>
              <Badge bg="danger" className="badge">
                Budget
              </Badge>{" "}
              ${detailMovie.budget}
            </li>
            <li>
              <Badge bg="danger" className="badge">
                Revenue
              </Badge>{" "}
              ${detailMovie.revenue}
            </li>
            <li>
              <Badge bg="danger" className="badge">
                Release Day
              </Badge>{" "}
              {detailMovie.release_date}
            </li>
            <li>
              <Badge bg="danger" className="badge">
                Time
              </Badge>{" "}
              {detailMovie.runtime}
            </li>
          </ul>
          <Trailer videoId={videoId} />
          <button className="heart-button">
            <FontAwesomeIcon
              icon={faHeart}
              className="heart-icon"
              style={{ color: "#ffffff" }}
            />
          </button>
        </Col>
      </Row>
    </section>
  );
};

export default DetailMovieInfo;
