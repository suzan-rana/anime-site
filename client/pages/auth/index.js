import React from "react";
import Auth from "../../components/Auth/Auth";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Router from "next/router";

const index = () => {
  const { email, name } = useSelector((state) => state.auth.userProfile);

  useEffect(() => {
    if (email && name) Router.push("/");
    console.log(email)  
  }, [email]);
  return (
    <div>
      <Auth />
    </div>
  );
};

export default index;
