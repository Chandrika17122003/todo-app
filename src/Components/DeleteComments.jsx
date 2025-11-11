// src/Components/DeleteComments.jsx
import React, { useState } from "react";

function DeleteComments() {
  const [commentId, setCommentId] = useState("");
  const [message, setMessage] = useState("");

  const handleDeleteComment = async () => {
    if (!commentId) {
      alert("Please enter Comment ID");
      return;
    }

    try {
      const response = await fetch(`http://localhost:9090/api/comments/${commentId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete comment");
      }

      const data = await response.json();
      setMessage(`🗑️ ${data.message}`);
      setCommentId("");
    } catch (error) {
      console.error(error);
      alert("Error deleting comment");
    }
  };

  return (
    <div className="container mt-4">
      <h3>🗑️ Delete Comment</h3>
      <input
        type="number"
        placeholder="Enter Comment ID"
        className="form-control w-50 mx-auto my-2"
        value={commentId}
        onChange={(e) => setCommentId(e.target.value)}
      />
      <button className="btn btn-danger" onClick={handleDeleteComment}>
        Delete Comment
      </button>

      {message && <p className="mt-3 text-success">{message}</p>}
    </div>
  );
}

export default DeleteComments;
