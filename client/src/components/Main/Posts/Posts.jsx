import React, { useEffect } from "react";
import { Container, Grid, Stack, Button } from "@mui/material";
import Post from "./Post";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostsThunk } from "../../../redux/slice/postSlice";
import { deletePost } from "../../../api";

const Posts = () => {
  // const [ posts, setPost]
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  console.log("POSTS", posts);
  console.log(posts);
  useEffect(() => {
    dispatch(fetchPostsThunk());
  }, []);
  console.log(posts);
  // if (posts.length == 0) return <>No posts.</>;

  const handleDelete = (id) => {
    deletePost(id)
      .then(() => dispatch(fetchPostsThunk()))
      .then(() => console.log("deleted and dispatched."));
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
            <Post post={post} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Posts;
