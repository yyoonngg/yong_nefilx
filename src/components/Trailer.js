import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import YouTube, {YouTubeProps} from "react-youtube";
import { ClipLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

const Trailer = ({ videoId }) => {
  const [trailerWidth, setTrailerWidth] = useState(0);
  const { loading } = useSelector((state) => state.movie);


  if (loading) {
    return (
      <div className="loading-spinner">
        <ClipLoader color="#ffff" loading={loading} size={150} />
      </div>
    );
  }
  return (
    <div className="mt-5 mb-5">
      <div
        className="open-trailer"
        onClick={(e) => {
          setTrailerWidth("block");
        }}
      >
        <FontAwesomeIcon
          icon={faFilm}
          style={{ color: "DC3545" }}
          className="me-1 trailer-icon"
        />
        <span>Watch Trailer</span>
      </div>
      <div
        className="modal show trailer-area"
        style={{
          display: "block",
          position: "initial",
          display: trailerWidth,
        }}
      >
        <Modal.Dialog className="trailer-box">
          <Button
            variant="secondary"
            onClick={() => {
              setTrailerWidth("none");
            }}
            className="close-trailer"
          >
            X
          </Button>
          <YouTube
            className="text-center"
            style={{ backgroundSize: "cover" }}
            videoId={
              videoId.results &&
              videoId.results.find((item) => item.type == "Trailer").key
            }
            opts={{
              width: "1400",
              height: "650",
              playerVars: {
                //autoplay: play,
                rel: 0,
              },
            }}
            onEnd={(e) => {
              e.target.stopVideo(0);
            }}
            // playVideo={(e)=>{
            //     e.target.playVideo();
            // }}
          />
        </Modal.Dialog>
      </div>
    </div>
  );
};

export default Trailer;
