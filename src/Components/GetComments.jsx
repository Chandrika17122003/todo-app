// src/Components/GetComments.jsx
import React, { useState } from "react";

function GetComments() {
  const [postId, setPostId] = useState("");
  const [comments, setComments] = useState([]);

  const handleGetComments = async () => {
    if (!postId) {
      alert("Please enter a Post ID");
      return;
    }

    try {
      const response = await fetch(`http://localhost:9090/api/post/${postId}/comments`);
      if (!response.ok) {
        throw new Error("Failed to fetch comments");
      }

      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error(error);
      alert("Error fetching comments");
    }
  };

  return (
    <div className="container mt-4">
      <h3>📋 Get Comments by Post ID</h3>
      <input
        type="number"
        placeholder="Enter Post ID"
        className="form-control w-50 mx-auto my-3"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleGetComments}>
        Get Comments
      </button>

      <div className="mt-3">
        {comments.length > 0 ? (
          <ul className="list-group">
            {comments.map((comment) => (
              <li key={comment.id} className="list-group-item">
                <strong>ID:</strong> {comment.id} <br />
                <strong>Content:</strong> {comment.content}
              </li>
            ))}
          </ul>
        ) : (
          <p>No comments found.</p>
        )}
      </div>
    </div>
  );
}

export default GetComments;
