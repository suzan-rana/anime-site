import React, { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/slice/authSlice";

const UserInfo = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const dispatch = useDispatch();
  console.log(user);
  const logoutHandler = () => {
    localStorage.clear();
    dispatch(logout());
    setUser(null)
  };
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <Card
      sx={{
        maxWidth: 300,
        paddingY: "1rem",
        paddingX: ".75rem",
        position: "absolute",
        marginRight: "2rem",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14, marginBottom: "1.25rem" }}
          color="text.secondary"
        >
          Hello, there
        </Typography>
        <Typography variant="h5" component="div" sx={{ fontSize: 18 }}>
          {user === null
            ? "It seems you are not logged in,"
            : user.responseToUser.name}
        </Typography>
      </CardContent>
      <CardActions sx={{ marginLeft: ".5rem" }}>
        {user === null ? (
          <Button
            to="/auth"
            component={Link}
            variant="contained"
            color="primary"
            type="submit"
          >
            Log in
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={logoutHandler}
          >
            Log out
          </Button>
        )}
        <br />
      </CardActions>
      <CardContent>
        Dont have an account?{" "}
        <Typography
          sx={{ cursor: "pointer", textDecoration: "underline", color: "blue" }}
        >
          Register here
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserInfo;
