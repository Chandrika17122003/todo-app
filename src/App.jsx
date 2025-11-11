import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Users from "./Components/Users";
import UsersPage from "./Components/UsersPage";
import Category from "./Components/Category";
import CategoryPage from "./Components/CategoryPage";
import Post from "./Components/Post";          
import PostPage from "./Components/PostPage";
import Comments from "./Components/Comments";
import CommentsPage from "./Components/CommentsPage";
function App() {
  return (
    <>
      <div id="h1">
        <h1>📝 Welcome to Blogging Application</h1>
      </div>

      <Routes>
        {/* Home Page with both Users and Category */}
        <Route
          path="/"
          element={
            <div>
              <Users />
              <Category />
              <Post />
              <Comments />
            </div>
          }
        />

        {/* Users Page */}
        <Route path="/users" element={<UsersPage />} />

        {/* Category Page */}
        <Route path="/categories" element={<CategoryPage />} />
      {/* Post Page */}
        <Route path="/posts" element={<PostPage />} />
        {/* Comments Page */}
        <Route path="/Comments" element={<CommentsPage />} />
      
      </Routes>
    </>
  );
}

export default App;
