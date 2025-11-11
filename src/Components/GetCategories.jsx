import React, { useEffect, useState } from "react";
import axios from "axios";

function GetCategories() {
  const [categories, setCategories] = useState([]);
  const BASE_URL = "http://localhost:9090/api/categories/";

  useEffect(() => {
    axios.get(BASE_URL)
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="get-categories">
      <h4>📋 All Categories</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat) => (
            <tr key={cat.categoryId}>
              <td>{cat.categoryId}</td>
              <td>{cat.categoryTitle}</td>
              <td>{cat.categoryDescription}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GetCategories;
