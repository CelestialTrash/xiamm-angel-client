//CSS
import "./ProductDetailsPage.css";
//AXIOS
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import EditProductForm from "../Components/EditProductForm";
import { useContext } from "react";
import { AuthContext } from "../context/user.context";
import ProductImageGallery from "../Components/ProductImageGallery";

const API_URL = import.meta.env.VITE_API_URL;
const storedToken = localStorage.getItem("Authorization");

function ProductDetailsPage() {
  const [product, setProduct] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("")
  const [size, setSize] = useState("")
  const [materials, setMaterials] = useState("")
  const { productId } = useParams();

  function getProduct() {
    axios
      .get(`${API_URL}/api/products/${productId}`)
      .then((response) => {
        const oneProduct = response.data;        
        setProduct(oneProduct);
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getProduct();
  }, []);
  useEffect(() => {
    setTitle(product.title);
    setPrice(product.price);
    setImages([product.imageUrl]);
    setDescription(product.description);
    setSize(product.size);
    setMaterials([product.materials]);
  }, [product]);

  
  

  //Edit Products
  const [editProductId, setEditProductId] = useState(null);
  
  const handleDisplayEditForm = (productId) => {
    return setEditProductId(productId);
  };

  const handleCancelEdit = () => {
    setEditProductId(null);
  };

  //User checker
  const { user } = useContext(AuthContext);
  
  return (
    <section className="product-details-container">
      { product && <ProductImageGallery getProduct={getProduct} product={product}/>}
      <div className="product-details-info">
        <h2>{title}</h2>
        <div className="product-specs">
          <h3>$ {price}</h3>
          <h6>Size</h6>
          <p>{size}</p>
          <h6>Materials</h6>
          <p>{materials}</p>
        </div>
        <h4>Description</h4>
        <p>{description}</p>
      </div>
      <button className="purchase-btn">Purchase</button>
      {user ? (
        <>
          <button
            className="edit-btn"
            onClick={() => handleDisplayEditForm(product._id)}
          >
            Edit
          </button>
          {editProductId === product._id && (
            <EditProductForm
              getProduct={getProduct}
              id={product._id}
              title={product.title}
              price={product.price}
              image={product.image}
              size={product.size}
              materials={product.materials}
              description={product.description}
              cancelEdit={handleCancelEdit}
            />
          )}
        </>
      ) : (
        <div></div>)
      }
      <Link to="/products">
        <button className="cancel-btn">Return</button>
      </Link>
    </section>
  );
}

export default ProductDetailsPage;
