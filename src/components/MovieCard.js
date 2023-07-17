import React from "react";
import { Badge } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { movieAction } from "../redux/actions/MovieAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faStar } from "@fortawesome/free-solid-svg-icons";

const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goToMovieDetail = () => {
    dispatch(movieAction.getDetailMovie(item.id));
    navigate(`/movies/${item.id}`);
  };
  return (
    <div
      onClick={goToMovieDetail}
      className="card"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}` +
          ")",
        backgroundSize: "cover",
      }}
    >
      <div className="overlay">
        <div>
          <h1>{item.title}</h1>
          <div>
            {item.genre_ids.map((id) => (
              <Badge bg="danger" className="mb-2 me-1">
                {genreList.find((item) => id == item.id).name}
              </Badge>
            ))}
          </div>
        </div>
        <ul className="card-info">
          <li>
            <FontAwesomeIcon icon={faStar} style={{ color: "#ff0000" }} />
            <span>{item.vote_average}</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faUsers} style={{ color: "#ffea80" }} />
            <span>{item.popularity}</span>
          </li>
          <li className="detail-movie-adult">
            {!item.adult && <span>Under 18</span>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieCard;
