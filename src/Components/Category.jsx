// src/Components/Category.jsx
import { useNavigate } from "react-router-dom";
//import './Category.css'


function Category() {
  const navigate = useNavigate();

  return (
    <div className="category-box text-center mt-3">
      <button
        className="btn btn-info"
        onClick={() => navigate("/categories")}
      >
        <h1>📂 Category</h1>
      </button>
    </div>
  );
}

export default Category;
