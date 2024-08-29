//REACT
import { useState, useEffect, useContext } from "react";
//AXIOS
import axios from "axios";
//CONTEXT
import { AuthContext } from "../context/user.context";
//COMPONENTS
import ProductForm from "../Components/ProductForm";
import ProductCard from "../Components/ProductCard";
import SearchProducts from "../Components/SearchProducts";

//CSS
import "./ProductsPage.css";
import Loader from "../Components/Loader";

const API_URL = import.meta.env.VITE_API_URL;


function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [displayAddProductForm, setDisplayAddProductForm] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const [editProductId, setEditProductId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  

  //Get Products
  function getProducts() {
    setIsLoading(true)
    axios
      .get(`${API_URL}/api/products`)
      .then((response) => {
        setProducts(response.data);
        setDisplayedProducts(response.data);
        setIsLoading(false)
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getProducts();
  }, []);

  
   
  const handleDisplayEditForm = (productId) => {
    return setEditProductId(productId);
  };

  const handleCancelEdit = () => {
    setEditProductId(null);
  };

  function deleteProduct(id) {
    const storedToken = localStorage.getItem("Authorization");  
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


  //User checker
  const { user } = useContext(AuthContext);

  return (
    <section className="product-page-section">
      {isLoading ? (
        <Loader />
      ) : (
        <>
        <div>
        <SearchProducts
                    products={products}
                    setDisplayedProducts={setDisplayedProducts}
                  />
        </div>
        <div>
          {user && (
            <button
              className="add-btn"
              onClick={() => {
                setDisplayAddProductForm(true);
              }}
            >
              Add Product
            </button>
          ) }
          </div>
          {displayAddProductForm && <ProductForm setDisplayAddProductForm={setDisplayAddProductForm}/>}
          <ul className="products-container">
            {displayedProducts.map((eachProduct) => {
              return (
                <ProductCard
                  key={eachProduct._id}
                  eachProduct={eachProduct}
                  user={user}
                  showWarning={showWarning}
                  displayWarning={displayWarning}
                  deleteProduct={deleteProduct}
                  idToDelete={idToDelete}
                  />
              );
            })}
            </ul>
          
          </>
      )}                
    </section>
    
  );
}

export default ProductsPage;
