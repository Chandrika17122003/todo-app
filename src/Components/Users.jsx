import React from "react";
import { useNavigate } from "react-router-dom";

function Users() {
  const navigate = useNavigate();

  return (
    <div className="users-box text-center mt-3">
      <button
        className="btn btn-primary"
        onClick={() => navigate("/users")}
      >
        <h1>👥 Users</h1>
      </button>
    </div>
  );
}

export default Users;
