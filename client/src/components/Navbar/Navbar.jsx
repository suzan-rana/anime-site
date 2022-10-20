import React from "react";
import { Box, Toolbar, AppBar, Button, Typography } from "@mui/material";
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }} marginBottom='1.75rem'>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Anime-Blogs
          </Typography>
          <Button variant='contained' color='primary'>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
