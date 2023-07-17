import React from "react";

const Review = ({ movieReview }) => {
  let filteredReview = [];
  for (let i = 0; i < 5; i++) {
    filteredReview.push(movieReview.results[i]);
    console.log(movieReview.results.indexOf);
  }

  return (
    <ul className="review-box" id="reviewArea">
      {movieReview.results.map((item) => {
        if (movieReview.results.indexOf(item) < 5) {
          return (
            <li className="each-review">
              <div>{item.author}</div>
              <div>{item.content}</div>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default Review;
