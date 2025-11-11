// src/Components/Post.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function Comments() {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-3">
      <button
        className="btn btn-secondary"
        onClick={() => navigate("/Comments")}
      >
        <h1>🗨️ Comments</h1>
      </button>
    </div>
  );
}

export default Comments;
