import React, { useEffect, useState } from "react";
import { Container, Grid, Stack, Button } from "@mui/material";
import Post from "./Post";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPostsThunk,
  likePostThunk,
  disLikePostThunk,
} from "../../../redux/slice/postSlice";
import { getRandomQuotesThunk } from "../../../redux/slice/animeSlice";
import { deletePost, likePost, disLikePost } from "../../../api";
// likePostThunk, disLikePostThunk
const Posts = ({ user, setUser }) => {
  const dispatch = useDispatch();
  const notAnimeposts = useSelector((state) => state.post.posts) || null;
  const animePosts = useSelector((state) => state.anime.quotes);
  const [isLiked, setIsLiked] = useState(false);
  const [posts, setPosts] = useState(notAnimeposts);

  useEffect(() => {
    setPosts(notAnimeposts);
    console.log(notAnimeposts);
  }, [notAnimeposts]);

  const handleLikePost = (id) => {
    const currentPost = posts?.find((item) => item._id === id);
    const hasAlreadyLiked =
      currentPost?.likes.find((item) => item._id === user?.id) || null;
    if (hasAlreadyLiked) {
      dispatch(disLikePostThunk(id)).then(() => {
        dispatch(fetchPostsThunk());
        // dispatch(dislike(id))
      });
    } else {
      dispatch(likePostThunk(id)).then(() => {
        dispatch(fetchPostsThunk());
        // dispatch(like(id))
      });
    }
  };
  useEffect(() => {
    dispatch(fetchPostsThunk());
    dispatch(getRandomQuotesThunk());
  }, []);
  const handleNotAnimePosts = () => {
    dispatch(fetchPostsThunk()).then(() => setPosts(notAnimeposts));
  };

  const handleAnimePosts = () => {
    setPosts(animePosts);
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
        <Button onClick={handleNotAnimePosts}>Tweets</Button>
        <Button onClick={handleAnimePosts}>Popular Quotes</Button>
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
