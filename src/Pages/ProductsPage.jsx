import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/user.context";
import axios from "axios";
import ProductForm from "../Components/ProductForm";
import EditProductForm from "../Components/EditProductForm";
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

  //Get Products
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

  //Edit Products
  const [editProductId, setEditProductId] = useState(null);

  const handleDisplayEditForm = (productId) => {
    return setEditProductId(productId);
  };

  const handleCancelEdit = () => {
    setEditProductId(null);
  };

  // Delete Products
  function deleteProduct(id) {
    axios
      .delete(`${API_URL}/api/products/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => setShowWarning(false))
      .then(() => getProducts())
      .catch((error) => console.log(error));
  }

  const displayWarning = (id) => {
    setShowWarning(true);
    setIdToDelete(id);
  };

  //Loader
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  //User checker
  const { user } = useContext(AuthContext);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <section className="catalog-page-section">
          {user ? (
            <button
              className="add-btn"
              onClick={() => {
                setDisplayAddProductForm(true);
              }}
            >
              Add Product
            </button>
          ) : (
            <div></div>
          )}
          {displayAddProductForm && <ProductForm />}
          <ul className="products-container">
            {products.map((eachProduct) => {
              return (
                <div className="product-relative" key={eachProduct._id}>
                  <Link to={`/products/${eachProduct._id}`}>
                    <li className="product-card">
                      <div>
                        <h2>{eachProduct.title}</h2>
                        <img
                          src={eachProduct.imageUrl}
                          alt={eachProduct.title}
                        />{" "}
                        {/* //this is probably wrong, review it and add formatting */}
                        <h3>{eachProduct.price}</h3>
                      </div>
                    </li>
                  </Link>
                  {user ? (
                    <>
                      <button
                        className="edit-btn"
                        onClick={() => handleDisplayEditForm(eachProduct._id)}
                      >
                        Edit
                      </button>
                      {editProductId === eachProduct._id && (
                        <EditProductForm
                          getProducts={getProducts}
                          id={eachProduct._id}
                          title={eachProduct.title}
                          price={eachProduct.price}
                          image={eachProduct.image}
                          cancelEdit={handleCancelEdit}
                        />
                      )}
                      <button
                        className="delete-btn"
                        onClick={() => displayWarning(eachProduct._id)}
                      >
                        🗑️
                      </button>
                      {showWarning && idToDelete === eachProduct._id && (
                        <WarningProduct
                          deleteProduct={deleteProduct}
                          idToDelete={idToDelete}
                          setShowWarning={setShowWarning}
                        />
                      )}
                    </>
                  ) : (
                    <div></div>
                  )}
                </div>
              );
            })}
          </ul>
        </section>
      )}
    </>
  );
}

export default ProductsPage;
