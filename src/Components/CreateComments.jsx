// src/Components/CreateComments.jsx
import React, { useState } from "react";

function CreateComments() {
  const [postId, setPostId] = useState("");
  const [content, setContent] = useState("");
  const [responseMsg, setResponseMsg] = useState("");

  const handleCreateComment = async () => {
    if (!postId || !content) {
      alert("Please enter both Post ID and comment content");
      return;
    }

    try {
      const response = await fetch(`http://localhost:9090/api/post/${postId}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });

      if (!response.ok) {
        throw new Error("Failed to create comment");
      }

      const data = await response.json();
      setResponseMsg(`✅ Comment Created Successfully! ID: ${data.id}`);
      setContent("");
    } catch (error) {
      console.error(error);
      alert("Error creating comment");
    }
  };

  return (
    <div className="container mt-4">
      <h3>➕ Create Comment</h3>
      <input
        type="number"
        placeholder="Enter Post ID"
        className="form-control w-50 mx-auto my-2"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
      />
      <textarea
        placeholder="Enter your comment"
        className="form-control w-50 mx-auto my-2"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button className="btn btn-success" onClick={handleCreateComment}>
        Add Comment
      </button>

      {responseMsg && <p className="mt-3 text-success">{responseMsg}</p>}
    </div>
  );
}

export default CreateComments;
