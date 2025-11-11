import React, { useState } from "react";
import axios from "axios";

/*
 Props:
   - onPostUpdated: callback to refresh posts in parent
*/
function UpdatePost({ onPostUpdated }) {
  const [postId, setPostId] = useState("");
  const [data, setData] = useState({
    title: "",
    content: "",
  });
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!postId) {
      setMessage("Please enter Post ID to update.");
      return;
    }

    try {
      const formData = new FormData();

      if (data.title) formData.append("title", data.title);
      if (data.content) formData.append("content", data.content);
      if (image) formData.append("image", image);

      // Use PATCH if you want partial updates, otherwise PUT works too
      const url = `http://localhost:9090/api/posts/update/${postId}`;
      const res = await axios.patch(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setMessage("✅ Post updated successfully!");
      setPostId("");
      setData({ title: "", content: "" });
      setImage(null);

      if (onPostUpdated) onPostUpdated();
    } catch (err) {
      console.error("Error updating post:", err);
      setMessage("❌ Failed to update post. Check ID and backend logs.");
    }
  };

  return (
    <div className="update-post-box mt-2">
      <h4>✏️ Update Post</h4>
      {message && <p>{message}</p>}

      <form onSubmit={handleUpdate} style={{ maxWidth: 700, margin: "0 auto" }}>
        <div className="mb-2">
          <input
            className="form-control"
            name="postId"
            value={postId}
            onChange={(e) => setPostId(e.target.value)}
            placeholder="Post ID to update"
            type="number"
            required
          />
        </div>

        <div className="mb-2">
          <input
            className="form-control"
            name="title"
            value={data.title}
            onChange={handleChange}
            placeholder="New title"
          />
        </div>

        <div className="mb-2">
          <textarea
            className="form-control"
            name="content"
            value={data.content}
            onChange={handleChange}
            placeholder="New content"
            rows={4}
          />
        </div>

        <div className="mb-2">
          <input
            className="form-control"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        <button className="btn btn-warning" type="submit">
          Update Post
        </button>
      </form>
    </div>
  );
}

export default UpdatePost;


