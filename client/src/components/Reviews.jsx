import axios from "axios";
import { useState, useEffect } from "react";

import ReviewForm from "./ReviewForm";

const Reviews = ({ brewery }) => {
  // const [toggle, setToggle] = useState(true);
  let [reviews, setReviews] = useState([]);
  // let toggle = reviews.length > 1;

  useEffect(() => {
    const getReviews = async () => {
      let reviewList = await axios.get(
        `http://localhost:3001/review/${brewery.id}`
      );
      setReviews(reviewList.data);
    };
    getReviews();
  }, [reviews]);

  // console.log(toggle);

  return reviews.length >= 1 ? (
    <div className={`main-bg-color`}>
      <ReviewForm brewery={brewery} />
      {reviews.map((review) => (
        <div>
          <h2>{review.title}</h2>
          <h3>{review.user}</h3>
          <p>{review.body}</p>
          <p>{review.rating}/5</p>
        </div>
      ))}
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default Reviews;
