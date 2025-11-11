import React, { useState } from "react";
import axios from "axios";

function DeleteCategory() {
  const [catId, setCatId] = useState("");
  const [message, setMessage] = useState("");
  const BASE_URL = "http://localhost:9090/api/categories/";

  const handleDelete = (e) => {
    e.preventDefault();
    axios.delete(`${BASE_URL}${catId}`)
      .then(() => setMessage("✅ Category deleted successfully!"))
      .catch(() => setMessage("❌ Failed to delete category."));
  };

  return (
    <div className="delete-category">
      <h4>🗑️ Delete Category</h4>
      {message && <p>{message}</p>}
      <form onSubmit={handleDelete} className="border p-3 rounded">
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
        <button type="submit" className="btn btn-danger">Delete Category</button>
      </form>
    </div>
  );
}

export default DeleteCategory;
