import React, { useState } from "react";
import GetComments from "./GetComments";
import CreateComments from "./CreateComments";
//import UpdateCategory from "./GetComment";
import DeleteComments from "./DeleteComments";

function CommentsPage() {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div className="category-page container mt-4">
      <h2>📂 Comment Management</h2>

      <div className="my-3">
        <button
          className="btn btn-success mx-2"
          onClick={() => setActiveComponent("create")}
        >
          ➕ Add Comment
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={() => setActiveComponent("get")}
        >
          📋 Get Comments
        </button>
        <button
          className="btn btn-danger mx-2"
          onClick={() => setActiveComponent("delete")}
        >
         
          🗑️ Delete Comment
          
        </button>
      </div>

      <div className="mt-4">
        {activeComponent === "create" && <CreateComments />}
        {activeComponent === "get" && <GetComments />}
        {activeComponent === "delete" && <DeleteComments />}
      </div>
    </div>
  );
}

export default CommentsPage;
