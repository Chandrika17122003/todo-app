import React, { useState } from "react";
import axios from "axios";
import GetPosts from "./GetPosts";
import CreatePost from "./CreatePost";
import UpdatePost from "./UpdatePost";
import DeletePost from "./DeletePost";

function PostPage() {
  const [activeComponent, setActiveComponent] = useState(null);
  const [posts, setPosts] = useState([]);

  // Fetch posts from backend and store in parent state
  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:9090/api/posts/posts");
      // PostResponse has content array (page)
      setPosts(response.data.content || []);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setPosts([]);
    }
  };

  return (
    <div className="container mt-4">
      <h2>📰 Post Management</h2>

      <div className="my-3">
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            setActiveComponent("get");
            fetchPosts();
          }}
        >
          📋 Get All Posts
        </button>

        <button
          className="btn btn-success mx-2"
          onClick={() => setActiveComponent("create")}
        >
          ➕ Create Post
        </button>

        <button
          className="btn btn-warning mx-2"
          onClick={() => {
            setActiveComponent("update");
          }}
        >
          ✏️ Update Post
        </button>

        <button
          className="btn btn-danger mx-2"
          onClick={() => {
            setActiveComponent("delete");
          }}
        >
          🗑️ Delete Post
        </button>
      </div>

      <div className="mt-4">
        {activeComponent === "get" && (
          <GetPosts posts={posts} fetchPosts={fetchPosts} />
        )}

        {activeComponent === "create" && (
          <CreatePost onPostCreated={fetchPosts} />
        )}

        {activeComponent === "update" && (
          <UpdatePost onPostUpdated={fetchPosts} />
        )}

        {activeComponent === "delete" && (
          <DeletePost onPostDeleted={fetchPosts} />
        )}
      </div>
    </div>
  );
}

export default PostPage;
