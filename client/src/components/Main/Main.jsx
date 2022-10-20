import React from "react";
import Posts from "./Posts/Posts.jsx";
import CreatePost from "./CreatePost/CreatePost";
import UserInfo from "./UserInfo/UserInfo";
import { Grid, } from '@mui/material'

const Main = () => {
  return (
    <>
      <Grid container spacing='4rem'>
        <Grid item xs={12} sm={3}>
          <CreatePost />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Posts />
        </Grid>
        <Grid item sm={3}>
          <UserInfo />
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
