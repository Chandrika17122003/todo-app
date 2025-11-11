// src/Components/Post.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function Post() {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-3">
      <button
        className="btn btn-secondary"
        onClick={() => navigate("/posts")}
      >
        <h1>📰 Posts</h1>
      </button>
    </div>
  );
}

export default Post;
