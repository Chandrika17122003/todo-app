import React, { useState } from "react";
import axios from "axios";

function CreateUser() {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
  });
  const [message, setMessage] = useState("");

  const BASE_URL = "http://localhost:9090/api/users/";

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(BASE_URL, newUser)
      .then((res) => {
        setMessage("✅ User created successfully!");
        setNewUser({ name: "", email: "", password: "", about: "" });
      })
      .catch((err) => {
        console.error("Error:", err);
        setMessage("❌ Failed to create user.");
      });
  };

  return (
    <div className="create-user mt-3">
      <h4>➕ Create New User</h4>
      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit} className="border p-3 rounded shadow-sm">
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            name="name"
            value={newUser.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter name"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            name="email"
            value={newUser.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter email"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            name="password"
            value={newUser.password}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter password"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">About:</label>
          <input
            type="text"
            name="about"
            value={newUser.about}
            onChange={handleChange}
            className="form-control"
            placeholder="Write about yourself"
          />
        </div>

        <button type="submit" className="btn btn-success">
          Create User
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
