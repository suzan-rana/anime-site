import React, { useEffect } from "react";
import { Container, Grid, Stack, Button } from "@mui/material";
import Post from "./Post";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostsThunk } from "../../../redux/slice/postSlice";

const Posts = () => {
  // const [ posts, setPost]
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  console.log('POSTS', posts)
  console.log(posts)
  useEffect(() => {
    dispatch(fetchPostsThunk());
  }, []);
  console.log(posts);
  // if (posts.length == 0) return <>No posts.</>;
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
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Posts;
