import { TextField, Grid, IconButton, InputAdornment } from "@mui/material";
import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Input = ({
  name,
  type,
  half,
  autoFocus,
  label,
  handleChange,
  handleShowPassword,
}) => {
  return (
    <Grid item xs={12} sm={half ? 6: 12} marginY='.25rem'>
      <TextField
        label={label}
        required
        variant="outlined"
        onChange={handleChange}
        autoFocus={autoFocus}
        name={name}
        type={type}
        fullWidth
        InputProps={
          name === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {type === "password" ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
      ></TextField>
    </Grid>
  );
};

export default Input;
