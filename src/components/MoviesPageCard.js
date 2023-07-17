import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { movieAction } from '../redux/actions/MovieAction';
import { Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faStar } from "@fortawesome/free-solid-svg-icons";

const MoviesPageCard = ({item}) => {
    const {genreList} = useSelector((state)=> state.movie);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const goToDetail = ()=> {
        dispatch(movieAction.getDetailMovie(item.id));
        navigate(`/movies/${item.id}`);
    };
  return (
    <div 
    onClick={goToDetail}
    className='movieCard'
    id="bright"
    >
        <div className='info_section'>
            <div className='movie_header'>
                <img className="locandina" src={"https://image.tmdb.org/t/p/original//"+item.poster_path}/>
                <h1>{item.title}</h1>
                <h4>{item.release_date && item.release_date.split("-")[0]}</h4>
                <ul className='type'>
                {item.genre_ids.map((id) => (
                    <li>
                        <Badge bg="danger" className="mb-2 me-1 movies_badge">
                            {genreList.find((item) => id == item.id).name}
                        </Badge>
                    </li>
                    ))}
                </ul>
            </div>
            <div className='movie_desc'>{item.overview.length > 200 ? item.overview.substring(0,200)+"..." : item.overview}</div>
            <div className="movie_social">
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faStar} style={{ color: "#ff0000" }} />
                        <span>{item.vote_average}</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faUsers} style={{ color: "#ffea80" }} />
                        <span>{item.popularity}</span>
                    </li>
                    <li className="detail-movie-adult">
                        {!item.adult && <span className='eighteen'>Under 18</span>}
                    </li>
                </ul> 
            </div>
            
        </div>
        <div className="blur_back bright_back" style={{backgroundImage: "url("+`https://image.tmdb.org/t/p/original//${item.poster_path}`+")"}}></div>
    </div>
  )
}

export default MoviesPageCard