import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography, Avatar, Button } from "@mui/material";
import classes from "./styles";
import { Container } from "@mui/system";
import Input from "./Input";
import { LockOutlinedIcon } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { registerUserThunk } from "../../redux/slice/authSlice";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const [formData, setFormData] = useState(initialState);
  const [registerMode, setRegisterMode] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleRegisterMode = () => {
    setRegisterMode((prevRegisterMode) => !prevRegisterMode);
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(registerUserThunk(formData))

  }

  const handleChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper style={classes.paper} elevation={4}>
        {/* <Avatar style={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
          {registerMode ? "Register Now" : "Log In"}
        </Typography>
        <form style={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing="2">
            {registerMode && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              type="email"
              name="email"
              label="Email"
              handleChange={handleChange}
              width='100%'
              
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              handleShowPassword={handleShowPassword}
              width='150px'
              type={showPassword ? "text" : "password"}
            />
            {registerMode && (
              <Input
                name="confirmPassword"
                label="Confirm Password"
                handleChange={handleChange}
                type={showPassword ? "text" : "password"}
                width='100%'
              />
            )}
          </Grid>
          <Button
            style={classes.submit}
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
          >
            {registerMode ? "Sign up" : "Log In"}
          </Button>
          <Grid container sx={{pl:2}}  >
            <Grid item>
              <Button onClick={handleRegisterMode}>
                {registerMode
                  ? "Already have an account? Log In"
                  : "Don't have an account? Sign up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
