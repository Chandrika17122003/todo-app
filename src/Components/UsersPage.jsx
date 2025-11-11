// src/Components/UsersPage.jsx
import React, { useState } from "react";
import GetUsers from "./GetUsers";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";
import DeleteUser from "./DeleteUser";

function UsersPage() {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div className="users-page container mt-4">
      <h2>👥 Users Management</h2>

      {/* Buttons for each action */}
      <div className="my-3">
        <button
          className="btn btn-primary mx-2"
          onClick={() => setActiveComponent("get")}
        >
          📋 Get All Users
        </button>
        <button
          className="btn btn-success mx-2"
          onClick={() => setActiveComponent("create")}
        >
          ➕ Create User
        </button>
        <button
          className="btn btn-warning mx-2"
          onClick={() => setActiveComponent("update")}
      
        >
          ✏️ Update User
        </button>
        <button
          className="btn btn-danger mx-2"
          onClick={() => setActiveComponent("delete")}
          
        >
          🗑️ Delete User
        </button>
      </div>

      {/* Conditional Rendering */}
      <div className="mt-4">
        {activeComponent === "get" && <GetUsers />}
        {activeComponent === "create" && <CreateUser />}
         {activeComponent === "update" && <UpdateUser />}
        {activeComponent === "delete" && <DeleteUser/>}
      </div>
    </div>
  );
}

export default UsersPage;
