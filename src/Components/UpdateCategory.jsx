import React, { useState } from "react";
import axios from "axios";

function UpdateCategory() {
  const [catId, setCatId] = useState("");
  const [data, setData] = useState({ categoryTitle: "", categoryDescription: "" });
  const [message, setMessage] = useState("");
  const BASE_URL = "http://localhost:9090/api/categories/";

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`${BASE_URL}${catId}`, data)
      .then(() => setMessage("✅ Category updated successfully!"))
      .catch(() => setMessage("❌ Failed to update category."));
  };

  return (
    <div className="update-category">
      <h4>✏️ Update Category</h4>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit} className="border p-3 rounded">
        <div className="mb-3">
          <label>Category ID:</label>
          <input
            type="number"
            value={catId}
            onChange={(e) => setCatId(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label>Title:</label>
          <input
            type="text"
            name="categoryTitle"
            value={data.categoryTitle}
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
            value={data.categoryDescription}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-warning">Update Category</button>
      </form>
    </div>
  );
}

export default UpdateCategory;
