import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ProductForm from "../Components/ProductForm";
import WarningProduct from "../Components/WarningProduct";
import "./ProductsPage.css";

const API_URL = import.meta.env.VITE_API_URL;
const storedToken = localStorage.getItem("Authorization");


function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [displayAddProductForm, setDisplayAddProductForm] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const navigate = useNavigate();
  function getProducts() {
    axios
      .get(`${API_URL}/api/products`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getProducts();
  }, []);

function deleteProduct(id){
  axios
  .delete(`${API_URL}/api/products/${id}`,{ headers: { Authorization: `Bearer ${storedToken}` } })
  .then(() => getProducts())
  .catch((error) => console.log(error));
}

const displayWarning = (id) => {
  setShowWarning(true);
  setIdToDelete(id);
};


  return (
    <>
      <section className="catalog-page-section">
        <ul className="products-container">
          {products.map((eachProduct) => {
            return (
              <div className="product-relative" key={eachProduct._id}>
                <Link to={`/products/${eachProduct._id}`}>
                  <li className="product-card">
                    <div>
                      <h2>{eachProduct.title}</h2>
                      <img>{eachProduct.image}</img>{" "}
                      {/* //this is probably wrong, review it and add formatting */}
                      <h3>{eachProduct.price}</h3>
                    </div>
                  </li>
                </Link>
                <button
                  className="delete-button"
                  onClick={() => displayWarning(eachProduct._id)}
                >
                 🗑️
                </button>
              </div>
            );
          })}
        </ul>
        <button
          className="add-product-button"
          onClick={() => {
            setDisplayAddProductForm(true);
          }}
        >
          Add Product
        </button>
      </section>
      {showWarning && (
      <WarningProduct
        deleteProduct={deleteProduct}
        idToDelete={idToDelete}
        setShowWarning={setShowWarning}
      />
    )}
  {
    displayAddProductForm && <ProductForm />
  }
    </>
  );

}

export default ProductsPage;
