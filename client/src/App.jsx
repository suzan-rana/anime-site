import React, { useEffect } from "react";
import { Navbar, Main } from "./components";
import { useDispatch } from "react-redux";
import { fetchPostsThunk } from "./redux/slice/postSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsThunk());
  }, []);
  return (
    <>
      <Navbar /> <Main />
    </>
  );
};

export default App;
