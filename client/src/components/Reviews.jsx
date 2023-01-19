import axios from "axios";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ReviewForm from "./ReviewForm";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "../styles/Review.css";

const Reviews = ({
  brewery,
  reviews,
  toggle,
  setToggle,
  rerend,
  setRerend,
}) => {
  const [open, setOpen] = useState(false);
  const [leaveReview, setLeaveReview] = useState(false);
  const [editReview, setEditReview] = useState({});
  let [details, setDetails] = useState();
  const [deleteToggle, setDeleteToggle] = useState(false);

  useEffect(() => {}, [open]);

  const handleDelete = async (id) => {
    let dlte = await axios.delete(`/api/review/${details}`);
    console.log(dlte);
    setDeleteToggle(false);
    setToggle(!toggle);
    setToggle(!toggle);
  };

  const deleteOpen = (e) => {
    let id = e.target.name;
    setDetails(id);

    setDeleteToggle(true);
  };

  const deleteClose = () => {
    setDetails("");
    setDeleteToggle(false);
  };

  const handleToggle = () => {
    setToggle(true);
  };

  const handleOpen = async (e) => {
    let id = e.target.name;
    setDetails(id);
    let rev = await axios.get(`/api/review/single/${id}`);
    setEditReview(rev.data);
    setOpen(true);
  };

  const handleNewReview = () => {
    setLeaveReview(true);
  };

  const handleCloseReview = () => {
    setLeaveReview(false);
  };

  const handleClose = () => {
    setEditReview({
      title: "",
      user: "",
      body: "",
    });
    setDetails("");
    setOpen(false);
    setRerend(!rerend);
  };

  const handleChange = (e) => {
    let entry = e.target.value;
    switch (e.target.id) {
      case "title":
        setEditReview({
          ...editReview,

          title: entry,
        });
        break;

      case "body":
        setEditReview({
          ...editReview,

          body: entry,
        });
        break;

      case "user":
        setEditReview({
          ...editReview,
          user: entry,
        });
        break;

      default:
        console.log("Review error");
        break;
    }
  };

  const handleSubmit = async () => {
    let post = await axios.put(`/api/review/${details}`, {
      brewId: brewery.id,
      user: editReview.user,
      title: editReview.title,
      body: editReview.body,
    });

    handleClose();
  };

  return toggle ? (
    <div
      className={`reviews-container grid-display grid-col-full justify-center-self align-center-self`}
    >
      <button
        className=" grid-col-start-2 justify-center-self align-center-self margin-top"
        onClick={handleNewReview}
      >
        Leave a Review
      </button>
      <ReviewForm
        rerend={rerend}
        setRerend={setRerend}
        brewery={brewery}
        leaveReview={leaveReview}
        setLeaveReview={setLeaveReview}
        handleNewReview={handleNewReview}
        handleCloseReview={handleCloseReview}
      />
      {reviews.map((review) => (
        <div
          className="grid-col-start-2 grey-bg-cthru grid-display grid-col-full grid-row-auto box-shadow"
          key={review._id}
        >
          <div className="grid-col-start-2 grid-display grid-row-2">
            <h2 className="grid-row-start-1 border-bottom  review-title ">
              {review.title}
            </h2>
            <h4 className="grid-row-start-2  user">User: {review.user}</h4>
          </div>
          <p className="review-body grid-col-start-2  ">{review.body}</p>
          <div>
            <button
              name={`${review._id}`}
              className="marginless new-review-button "
              onClick={handleOpen}
            >
              Edit
            </button>
            <button
              name={`${review._id}`}
              className="new-review-button "
              onClick={deleteOpen}
            >
              Delete
            </button>
          </div>
          <Dialog open={open} onClose={handleClose}>
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
                value={editReview.title}
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
                value={editReview.user}
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
                value={editReview.body}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleSubmit}>Submit</Button>
            </DialogActions>
          </Dialog>
          <Dialog open={deleteToggle} onClose={deleteClose}>
            <DialogTitle>Alert</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to delete this review?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => deleteClose()}>Cancel</Button>
              <Button onClick={() => handleDelete()}>Confirm</Button>
            </DialogActions>
          </Dialog>
        </div>
      ))}
    </div>
  ) : (
    <div
      className={`reviews-container grid-display grid-col-full grid-row-auto`}
    >
      <div className="grid-col-start-2 align-center-self justify-center-self flex-display flex-column align-center justify-center">
        <Button
          sx={{
            backgroundColor: "#65666a",
            color: "white",
            borderRadius: "16px",
            marginTop: "10px",
            borderColor: "black",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
          }}
          onClick={() => {
            setToggle(true);
          }}
        >
          See Reviews
        </Button>
      </div>
    </div>
  );
};

export default Reviews;
