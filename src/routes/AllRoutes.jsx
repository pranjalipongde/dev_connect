import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Signup from "../pages/Signup";
import CreatePost from "../pages/CreatePost";
import PostDetails from "../pages/PostDetails";
import Login from "../pages/Login";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/create-post" element={<CreatePost />} />
      <Route path="/post/:postId" element={<PostDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
