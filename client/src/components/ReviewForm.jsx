import axios from "axios";
import { useState } from "react";

const ReviewForm = (props) => {
  const [newReview, setNewReview] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    let post = await axios.post(`http://localhost:3001/review`, {
      brewId: props.brewery.id,
      user: newReview.user,
      title: newReview.title,
      body: newReview.body,
    });
    console.log(post);

    props.setToggle(!props.toggle);
  };

  const handleChange = (e) => {
    let entry = e.target.value;

    switch (e.target.id) {
      case "title":
        setNewReview({
          ...newReview,

          title: entry,
        });
        break;

      case "body":
        setNewReview({
          ...newReview,

          body: entry,
        });
        break;

      case "user":
        setNewReview({
          ...newReview,
          user: entry,
        });
        break;

      default:
        console.log("Review error");
        break;
    }
    // console.log(newReview);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Leave a Review</label>
        <input
          type="text"
          id="title"
          placeholder="Title"
          onChange={handleChange}
        ></input>
        <textarea
          placeholder="Review"
          id="body"
          onChange={handleChange}
        ></textarea>
        <input
          type="text"
          id="user"
          placeholder="Name"
          onChange={handleChange}
        ></input>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default ReviewForm;
