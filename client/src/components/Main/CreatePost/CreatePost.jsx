import React, { useState } from "react";
import { TextField, Typography, Paper, Button } from "@mui/material";
import classes from "./styles";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
// import { createPostThunk } from "../../../redux/slice/postSlice.js"
import { createPost } from "../../../api/index";
import { fetchPostsThunk } from "../../../redux/slice/postSlice";

const initialState = {
  title: "",
  description: "",
  tags: "",
  selectedFile: "",
};
const CreatePost = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createPost(formData).then(() => {
      dispatch(fetchPostsThunk());
    }).then( () => setFormData(initialState))
  };

  return (
    <Paper style={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        style={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6" marginBottom="1rem">
          What's on your mind ?
        </Typography>
        <TextField
          name="title"
          value={formData.title}
          variant="outlined"
          label="Title"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          name="description"
          value={formData.description}
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          onChange={handleChange}
        />
        <TextField
          name="tags"
          variant="outlined"
          value={formData.tags}
          label="Tags (coma separated)"
          fullWidth
          onChange={handleChange}
        />
        <div style={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            value={formData.selectedFile}
            onDone={({ base64 }) =>
              setFormData((prevFormData) => ({
                ...prevFormData,
                selectedFile: base64,
              }))
            }
          />
        </div>
        <Button
          style={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default CreatePost;
