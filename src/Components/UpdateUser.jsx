// src/Components/UpdateUser.jsx
import React, { useState } from "react";
import axios from "axios";

function UpdateUser() {
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
  });
  const [message, setMessage] = useState("");

  const BASE_URL = "http://localhost:9090/api/users/";

  // update form values
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      setMessage("❌ Please enter a valid User ID to update.");
      return;
    }

    try {
      const res = await axios.put(`${BASE_URL}${userId}`, userData);
      setMessage("✅ User updated successfully!");
      setUserId("");
      setUserData({ name: "", email: "", password: "", about: "" });
      console.log("Response:", res.data);
    } catch (err) {
      console.error("Error:", err);
      setMessage("❌ Failed to update user.");
    }
  };

  return (
    <div className="update-user mt-3">
      <h4>✏️ Update User</h4>
      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit} className="border p-3 rounded shadow-sm">
        <div className="mb-3">
          <label className="form-label">User ID:</label>
          <input
            type="number"
            name="id"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="form-control"
            placeholder="Enter User ID to update"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter new name"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter new email"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter new password"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">About:</label>
          <input
            type="text"
            name="about"
            value={userData.about}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter new about info"
          />
        </div>

        <button type="submit" className="btn btn-warning">
          Update User
        </button>
      </form>
    </div>
  );
}

export default UpdateUser;
