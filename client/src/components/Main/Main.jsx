import React from "react";
import Posts from "./Posts/Posts.jsx";
import CreatePost from "./CreatePost/CreatePost";
import UserInfo from "./UserInfo/UserInfo";
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


const getItem = JSON.parse(localStorage.getItem("user")) || null;
const Main = () => {
  const location = useLocation()
  // const initialUser = useSelector( state => state.auth.userProfile)
  const [user, setUser] = useState(getItem) ;
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [location]);

  return (
    <>
      <Grid container spacing="4rem">
        <Grid item xs={12} sm={3}>
          <CreatePost user={user} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Posts user={user} setUser={setUser} />
        </Grid>
        <Grid item sm={3}>
          <UserInfo user={user} setUser={setUser} />
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
