import React, { useState } from "react";
import axios from "axios";

function CreateCategory() {
  const [category, setCategory] = useState({ categoryTitle: "", categoryDescription: "" });
  const [message, setMessage] = useState("");
  const BASE_URL = "http://localhost:9090/api/categories/";

  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(BASE_URL, category)
      .then((res) => {
        setMessage("✅ Category created successfully!");
        setCategory({ categoryTitle: "", categoryDescription: "" });
      })
      .catch(() => setMessage("❌ Failed to create category."));
  };

  return (
    <div className="create-category">
      <h4>➕ Add New Category</h4>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit} className="border p-3 rounded">
        <div className="mb-3">
          <label>Category Title:</label>
          <input
            type="text"
            name="categoryTitle"
            value={category.categoryTitle}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label>Description:</label>
          <input
            type="text"
            name="categoryDescription"
            value={category.categoryDescription}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-success">Add Category</button>
      </form>
    </div>
  );
}

export default CreateCategory;
