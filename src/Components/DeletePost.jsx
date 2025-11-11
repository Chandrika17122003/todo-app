import React, { useState } from "react";
import axios from "axios";

/*
 Props:
   - onPostDeleted: callback to refresh posts in parent
*/
function DeletePost({ onPostDeleted }) {
  const [postId, setPostId] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();
    setMessage("");
    if (!postId) {
      setMessage("Enter Post ID to delete.");
      return;
    }

    try {
      await axios.delete(`http://localhost:9090/api/posts/${postId}`);
      setMessage("✅ Post deleted successfully!");
      setPostId("");
      if (onPostDeleted) onPostDeleted();
    } catch (err) {
      console.error("Error deleting post:", err);
      setMessage("❌ Failed to delete post. Check ID.");
    }
  };

  return (
    <div className="delete-post-box mt-2">
      <h4>🗑️ Delete Post</h4>
      {message && <p>{message}</p>}

      <form onSubmit={handleDelete} style={{ maxWidth: 420, margin: "0 auto" }}>
        <div className="mb-2">
          <input
            className="form-control"
            name="postId"
            value={postId}
            onChange={(e) => setPostId(e.target.value)}
            placeholder="Post ID to delete"
            type="number"
            required
          />
        </div>

        <button className="btn btn-danger" type="submit">
          Delete Post
        </button>
      </form>
    </div>
  );
}

export default DeletePost;
