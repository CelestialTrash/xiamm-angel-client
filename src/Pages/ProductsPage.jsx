import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductForm from "../Components/ProductForm";
import WarningProduct from "../Components/WarningProduct";
import "./Catalog.css";

function CatalogPage() {
  const [products, setProducts] = useState([]);
  const [displayAddProductForm, setDisplayAddProductForm] = useState(false);

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
  .delete(`${API_URL}/api/products/${id}`)
  .then(() => navigate(`/products`))
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
              <div className="product-relative" key={eachProduct.id}>
                <Link to={`/products/${productId}`}>
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
                  onClick={() => displayWarning(eachProduct.id)}
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
    </>
  );

  {
    displayAddProductForm && <ProductForm />;
  }
}

export default CatalogPage;
