// src/Components/DeleteUser.jsx
import React, { useState } from "react";
import axios from "axios";

function DeleteUser() {
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState("");
  const BASE_URL = "http://localhost:9090/api/users/";

  const handleDelete = async (e) => {
    e.preventDefault();

    if (!userId) {
      setMessage("❌ Please enter a valid User ID to delete.");
      return;
    }

    try {
      const res = await axios.delete(`${BASE_URL}${userId}`);
      console.log("Response:", res.data);
      setMessage("✅ User deleted successfully!");
      setUserId("");
    } catch (err) {
      console.error("Error:", err);
      setMessage("❌ Failed to delete user. Please check the ID.");
    }
  };

  return (
    <div className="delete-user mt-3">
      <h4>🗑️ Delete User</h4>
      {message && <p>{message}</p>}

      <form onSubmit={handleDelete} className="border p-3 rounded shadow-sm">
        <div className="mb-3">
          <label className="form-label">User ID:</label>
          <input
            type="number"
            name="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="form-control"
            placeholder="Enter User ID to delete"
            required
          />
        </div>

        <button type="submit" className="btn btn-danger">
          Delete User
        </button>
      </form>
    </div>
  );
}

export default DeleteUser;
