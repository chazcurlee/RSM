import axios from "axios";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import "../styles/ReviewForm.css";

const ReviewForm = (props) => {
  const [newReview, setNewReview] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    let post = await axios.post(`/api/review`, {
      brewId: props.brewery.id,
      user: newReview.user,
      title: newReview.title,
      body: newReview.body,
    });

    props.setRerend(!props.rerend);
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
