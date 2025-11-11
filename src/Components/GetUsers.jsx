// src/Components/GetUsers.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

function GetUsers() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const BASE_URL = "http://localhost:9090/api/users/";

  const fetchUsers = () => {
    axios
      .get(BASE_URL)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setError("Failed to load users.");
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="get-users">
      <h4>📋 All Users</h4>
      <button className="btn btn-info mb-3" onClick={fetchUsers}>
        🔄 Refresh Users
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {users.length > 0 ? (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>About</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.about}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}

export default GetUsers;
