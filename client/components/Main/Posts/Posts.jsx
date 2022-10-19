import React from "react";
import { Container, Grid, Stack, Button } from "@mui/material";
import Post from "./Post";

const Posts = () => {
  return (
    <Container border="1px solid red">
      <Stack justifyContent='center' direction='row' gap='3rem' marginBottom='1rem'>
        <Button>Tweets</Button>
        <Button>Blogs</Button>
        <Button>Popular Quotes</Button>
      </Stack>
      <Grid container fullWidth spacing={4}>
        <Grid item xs={12} fullWidth >
          <Post />
        </Grid>
        <Grid item xs={12} fullWidth>
          <Post />
        </Grid>
        <Grid item xs={12} fullWidth >
          <Post />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Posts;
