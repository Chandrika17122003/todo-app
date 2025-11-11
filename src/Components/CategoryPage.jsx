import React, { useState } from "react";
import GetCategories from "./GetCategories";
import CreateCategory from "./CreateCategory";
import UpdateCategory from "./UpdateCategory";
import DeleteCategory from "./DeleteCategory";

function CategoryPage() {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div className="category-page container mt-4">
      <h2>📂 Category Management</h2>

      <div className="my-3">
        <button
          className="btn btn-success mx-2"
          onClick={() => setActiveComponent("create")}
        >
          ➕ Add Category
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={() => setActiveComponent("get")}
        >
          📋 Get Categories
        </button>
        <button
          className="btn btn-warning mx-2"
          onClick={() => setActiveComponent("update")}
        >
          ✏️ Update Category
        </button>
        <button
          className="btn btn-danger mx-2"
          onClick={() => setActiveComponent("delete")}
        >
          🗑️ Delete Category
        </button>
      </div>

      <div className="mt-4">
        {activeComponent === "create" && <CreateCategory />}
        {activeComponent === "get" && <GetCategories />}
        {activeComponent === "update" && <UpdateCategory />}
        {activeComponent === "delete" && <DeleteCategory />}
      </div>
    </div>
  );
}

export default CategoryPage;
