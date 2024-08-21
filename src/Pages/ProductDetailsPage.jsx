import "./ProductDetailsPage.css";

import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const API_URL = import.meta.env.VITE_API_URL;
const storedToken = localStorage.getItem("Authorization");

function ProductDetailsPage() {
  const [product, setProduct] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(9.99);
  const [image, setImage] = useState("");
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
    setImage(product.image);
  }, [product]);

  return (
    <div className="product-details-container">
      <h2>{title}</h2>
      <img
            src={image}
            alt="product-image"/>
      {/* //this is probably wrong, review it and add formatting */}
      <h3>{price}</h3>
    </div>
  );
}

export default ProductDetailsPage;
