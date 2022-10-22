import React, { useEffect, useState } from "react";
import { Navbar, Main, Auth } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsThunk } from "./redux/slice/postSlice";
import { Routes, Route } from "react-router-dom";
import { Navigate, useLocation } from "react-router-dom";

const App = () => {

  let location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsThunk());
  }, []);

  const Home = () => {
    // const user = useSelector((state) => state.auth.userProfile);
    const getUser = JSON.parse(localStorage.getItem("user")) || null;
    const [user, setUser] = useState(getUser);
    if (user === null) {
      return <Navigate to="/auth" />;
    }
    useEffect(() => {
      setUser(JSON.parse(localStorage.getItem("user")));
    }, [location]);
    return (
      <>
        <Navbar /> <Main />
      </>
    );
  };

  const AuthApp = () => {
    const getUser = JSON.parse(localStorage.getItem("user")) || null;
    const [user, setUser] = useState(getUser);
    useEffect(() => {
      setUser(JSON.parse(localStorage.getItem("user")));
    }, []);

    return !user ? <Auth /> : <Navigate to="/" />;
  };
  return (
    <>
      <Routes>
        <Route exact path="/auth" element={<AuthApp />} />

        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;

// () =>
