import React, { useState } from "react";
import axios from "axios";

function GetPosts() {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const BASE_URL = "http://localhost:9090/api/posts/posts";

  // 🔹 Get all posts
  const fetchPosts = async () => {
    try {
      const response = await axios.get(BASE_URL);
      setPosts(response.data.content);
      setMessage("✅ Posts fetched successfully!");
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to fetch posts.");
    }
  };

  // 🔹 Get post by Post ID
  const fetchPostById = async () => {
    const postId = prompt("Enter Post ID:");
    if (!postId) return;
    try {
      const response = await axios.get(`http://localhost:9090/api/posts/posts/${postId}`);
      setPosts([response.data]);
      setMessage(`✅ Post with ID ${postId} fetched successfully!`);
    } catch (err) {
      console.error(err);
      setMessage("❌ Post not found.");
    }
  };

  // 🔹 Get posts by User ID
  const fetchPostsByUser = async () => {
    const userId = prompt("Enter User ID:");
    if (!userId) return;
    try {
      const response = await axios.get(`http://localhost:9090/api/posts/user/${userId}/posts`);
      setPosts(response.data);
      setMessage(`✅ Posts for User ID ${userId} fetched successfully!`);
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to fetch posts for this User ID.");
    }
  };

  // 🔹 Get posts by Category ID
  const fetchPostsByCategory = async () => {
    const categoryId = prompt("Enter Category ID:");
    if (!categoryId) return;
    try {
      const response = await axios.get(`http://localhost:9090/api/posts/category/${categoryId}/posts`);
      setPosts(response.data);
      setMessage(`✅ Posts for Category ID ${categoryId} fetched successfully!`);
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to fetch posts for this Category ID.");
    }
  };

  // 🔹 Search posts by Title keyword
  const searchPostsByTitle = async () => {
    if (!searchKeyword.trim()) {
      setMessage("⚠️ Please enter a keyword to search.");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:9090/api/posts/posts/search/${searchKeyword}`
      );
      setPosts(response.data);
      setMessage(`✅ Found ${response.data.length} post(s) matching "${searchKeyword}"`);
    } catch (err) {
      console.error(err);
      setMessage("❌ No posts found for this title keyword.");
    }
  };

  return (
    <div className="mt-3">
      <h4>📋 All Posts</h4>

      {/* 🔸 Buttons */}
      <div className="mb-3">
        <button className="btn btn-primary mx-2" onClick={fetchPosts}>
          🔄 Get All Posts
        </button>
        <button className="btn btn-secondary mx-2" onClick={fetchPostById}>
          🔍 Get by Post ID
        </button>
        <button className="btn btn-success mx-2" onClick={fetchPostsByUser}>
          👤 Get by User ID
        </button>
        <button className="btn btn-warning mx-2" onClick={fetchPostsByCategory}>
          📂 Get by Category ID
        </button>
      </div>

      {/* 🔸 Search by Title */}
      <div className="mb-3">
        <input
          type="text"
          placeholder="Enter title keyword..."
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          className="form-control d-inline-block"
          style={{ width: "300px", marginRight: "10px" }}
        />
        <button className="btn btn-info" onClick={searchPostsByTitle}>
          🔎 Search by Title
        </button>
      </div>

      {message && <p>{message}</p>}

      {/* 🔸 Table Display */}
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Content</th>
            <th>Image</th>
            <th>Category</th>
            <th>User</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.postId}>
              <td>{post.postId}</td>
              <td>{post.title}</td>
              <td>{post.content}</td>
              <td>{post.imageName}</td>
              <td>{post.category?.categoryTitle}</td>
              <td>{post.user?.name}</td>

              {/* 🗨️ Show comments here */}
              <td>
                {post.comments && post.comments.length > 0 ? (
                  <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                    {post.comments.map((comment) => (
                      <li key={comment.id}>🗨️ {comment.content}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No comments</p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GetPosts;
