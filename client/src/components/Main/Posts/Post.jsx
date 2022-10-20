import {
  Paper,
  Card,
  Typography,
  CardMedia,
  CardActions,
  CardContent,
  Button,
} from "@mui/material";
import React from "react";

const Post = ({ post }) => {
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
        <CardActions>
          <Button size="small">Like</Button>
          <Button size="small">Comment</Button>
        </CardActions>
      </Card>
    </Paper>
  );
};

export default Post;
