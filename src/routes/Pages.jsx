import React from "react";
import { Routes, Route } from "react-router-dom";
import Gallary from "../components/Gallary";
import Profile from "../components/Profile";
import LandingPage from "../components/LandingPage";
import Posts from "../components/Posts";
import Todo from "../components/Todo";
export default function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<LandingPage />} />
        <Route path="/profile-page/:id" element={<Profile />} />
        <Route path="/post-detail" element={<Posts />} />
        <Route path="/gallary-detail" element={<Gallary />} />
        <Route path="/todo-detail" element={<Todo />} />
      </Routes>
    </div>
  );
}
