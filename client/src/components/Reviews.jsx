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
  const [editReview, setEditReview] = useState({});
  let [details, setDetails] = useState();
  const [deleteToggle, setDeleteToggle] = useState(false);

  useEffect(() => {}, [open]);

  const handleDelete = async (id) => {
    let dlte = await axios.delete(`http://localhost:3001/review/${details}`);
    setToggle(!toggle);
    setToggle(!toggle);
  };

  const deleteOpen = (e) => {
    let id = e.target.name;
    setDetails(id);
    console.log(details);
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
    let rev = await axios.get(`http://localhost:3001/review/single/${id}`);
    setEditReview(rev.data);
    setOpen(true);
    console.log(editReview);
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
    console.log(details, editReview);
    let post = await axios.put(`http://localhost:3001/review/${details}`, {
      brewId: brewery.id,
      user: editReview.user,
      title: editReview.title,
      body: editReview.body,
    });
    console.log(post);
    handleClose();
  };

  //63c76b3a3e800409cc078b83

  return toggle ? (
    <div className={`reviews-container`}>
      <ReviewForm
        brewery={brewery}
        open={open}
        setOpen={setOpen}
        toggle={toggle}
        setToggle={setToggle}
      />
      {reviews.map((review) => (
        <div key={review._id}>
          <h2>{review.title}</h2>
          <h3>{review.user}</h3>
          <p>{review.body}</p>
          <button name={`${review._id}`} onClick={handleOpen}>
            Edit
          </button>
          <button name={`${review._id}`} onClick={deleteOpen}>
            Delete
          </button>
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
    <div className={`reviews-container`}>
      <Button
        onClick={() => {
          setToggle(true);
        }}
      >
        See Reviews
      </Button>
    </div>
  );
};

export default Reviews;
