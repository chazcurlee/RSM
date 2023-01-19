import axios from "axios";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import "../styles/ReviewForm.css";

const ReviewForm = (props) => {
  const [newReview, setNewReview] = useState({});

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // Ensures that all fields are filled before submiting
    if (newReview.title && newReview.user && newReview.body) {
      let post = await axios.post(`/api/review`, {
        brewId: props.brewery.id,
        user: newReview.user,
        title: newReview.title,
        body: newReview.body,
      });
      console.log(post);
      // Closes and rerenders page.. or it should at least
      props.setLeaveReview(false);
      props.setRerend(!props.rerend);
      // Guard else, if any required fields are not filled, alert user
    } else {
      if (!newReview.title) {
        alert("Please enter a title");
      }
      if (!newReview.user) {
        alert("Please enter your name");
      }
      if (!newReview.body) {
        alert("Please enter a review");
      }
    }
  };

  // Takes changes in textfield in order to create object to submit to db
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
  };

  return (
    <div className="review-form-container grid-col-start-2 grid-display ">
      <Dialog open={props.leaveReview} onClose={props.handleCloseReview}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            InputLabelProps={{ shrink: true }}
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
            required={true}
          />
          <TextField
            margin="dense"
            id="user"
            label="Name"
            InputLabelProps={{ shrink: true }}
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
            required={true}
          />
          <TextField
            margin="dense"
            id="body"
            label="Review"
            InputLabelProps={{ shrink: true }}
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
            required={true}
            rows={5}
            multiline
            minRows={3}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleCloseReview}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ReviewForm;
