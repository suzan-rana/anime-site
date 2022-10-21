import {
  Paper,
  Card,
  Typography,
  CardMedia,
  CardActions,
  CardContent,
  Button,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

const Post = ({ post, handleDelete }) => {
  // if(post )
  return (
    <Paper elevation={2}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.description}
          </Typography>
        </CardContent>
        {post.selectedFile && (
          <CardMedia
            component="img"
            height="140"
            image={post?.selectedFile}
            alt="green iguana"
          />
        )}
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Button size="small">Like</Button>
            <Button size="small">Comment</Button>
          </div>
          <IconButton sx={{ marginRight: "2rem"}} onClick={() => handleDelete(post._id)}>
            <DeleteIcon color="primary" />
          </IconButton>
        </CardActions>
      </Card>
    </Paper>
  );
};

export default Post;
