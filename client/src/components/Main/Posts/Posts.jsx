import React, { useEffect, useState } from "react";
import { Container, Grid, Stack, Button } from "@mui/material";
import Post from "./Post";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostsThunk, } from "../../../redux/slice/postSlice";
import { deletePost, likePost, disLikePost } from "../../../api";
// likePostThunk, disLikePostThunk
const Posts = ({ user, setUser }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    dispatch(fetchPostsThunk());
  }, []);

  const handleLikePost = (id) => {
    const currentPost = posts.find((item) => item._id === id);
    const hasAlreadyLiked = currentPost.likes.find(
      (item) => item._id === user?.id
    );
    if (hasAlreadyLiked) {
      dispatch(disLikePost(id)).then(() =>{
        dispatch(fetchPostsThunk())
        // dispatch(dislike(id))
      } );
      
    } else {
      dispatch(likePost(id)).then(() =>{
        dispatch(fetchPostsThunk())
        // dispatch(like(id))
      } );
      
    }
  };

  const handleDelete = (id) => {
    deletePost(id).then(() => dispatch(fetchPostsThunk()));
  };
  return (
    <Container border="1px solid red">
      <Stack
        justifyContent="center"
        direction="row"
        gap="3rem"
        marginBottom="1rem"
      >
        <Button>Tweets</Button>
        <Button>Popular Quotes</Button>
      </Stack>
      <Grid container fullWidth spacing={4}>
        {posts.map((post, index) => (
          <Grid item xs={12} fullWidth key={index}>
            <Post
              user={user}
              index={index}
              post={post}
              handleDelete={handleDelete}
              handleLikePost={handleLikePost}
              isLiked={isLiked}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Posts;
