import React, { useState } from "react";
import axios from "axios";

function CreatePost({ onPostCreated }) {
  const [post, setPost] = useState({
    title: "",
    content: "",
    userId: "",
    categoryId: "",
  });
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  // handle text input
  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  // handle image selection
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // handle submit (create post + upload image)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      if (!post.userId || !post.categoryId) {
        setMessage("⚠️ Please provide valid User ID and Category ID.");
        return;
      }

      // Step 1: Create post (without image)
      const payload = {
        title: post.title,
        content: post.content,
      };

      const createUrl = `http://localhost:9090/api/posts/user/${post.userId}/category/${post.categoryId}/posts`;
      const createRes = await axios.post(createUrl, payload);
      const createdPost = createRes.data;

      // Step 2: If image selected, upload it
      if (image) {
        const formData = new FormData();
        formData.append("image", image);

        await axios.post(
          `http://localhost:9090/api/posts/post/image/upload/${createdPost.postId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      }

      setMessage("✅ Post created successfully with image!");
      setPost({ title: "", content: "", userId: "", categoryId: "" });
      setImage(null);

      if (onPostCreated) onPostCreated();
    } catch (err) {
      console.error("Error creating post:", err);
      setMessage("❌ Failed to create post. Check console and backend logs.");
    }
  };

  return (
    <div className="create-post-box mt-3">
      <h4>🖋️ Create Post</h4>
      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit} style={{ maxWidth: 700, margin: "0 auto" }}>
        <div className="mb-2">
          <input
            className="form-control"
            name="title"
            value={post.title}
            onChange={handleChange}
            placeholder="Title"
            required
          />
        </div>

        <div className="mb-2">
          <textarea
            className="form-control"
            name="content"
            value={post.content}
            onChange={handleChange}
            placeholder="Content"
            rows={4}
            required
          />
        </div>

        <div className="mb-2">
          <input
            type="file"
            className="form-control"
            onChange={handleImageChange}
            accept="image/*"
          />
        </div>

        <div className="row">
          <div className="col mb-2">
            <input
              className="form-control"
              name="userId"
              value={post.userId}
              onChange={handleChange}
              placeholder="User ID"
              type="number"
              required
            />
          </div>
          <div className="col mb-2">
            <input
              className="form-control"
              name="categoryId"
              value={post.categoryId}
              onChange={handleChange}
              placeholder="Category ID"
              type="number"
              required
            />
          </div>
        </div>

        <button className="btn btn-success" type="submit">
          Create Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
