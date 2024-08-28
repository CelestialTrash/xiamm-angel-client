//CSS
import "./ProductForm.css";
import "./ButtonStyles.css";
//AXIOS
import axios from "axios";
//REACT
import { useNavigate } from "react-router-dom";
import { useState } from "react";

//CLOUDINARY

import UploadWidget from "./UploadWidget";

const API_URL = import.meta.env.VITE_API_URL;


function ProductForm({setDisplayAddProductForm}) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [image, setImage] = useState([]);
  const [linkToPlatform, setLinkToPlatform] = useState()
  const navigate = useNavigate();
  
  

  const handleSubmit = (e) => {
    
    const newProduct = { title, price, imageUrl: image , linkToPlatform};
    
    e.preventDefault();
    const storedToken = localStorage.getItem("Authorization");

    axios
      .post(`${API_URL}/api/products`, newProduct, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const newProduct = response.data;
        navigate(`/products/${newProduct._id}`); 
       
      })
      .catch((error) => console.log(error));
  };

  const handleUpload = (e) => {
    
    setImage((prevImages) => [...prevImages, e]);
   
  };
  return (
    <div className="create-product-layout">
      <form onSubmit={handleSubmit}>
        <h3> Create Product</h3>
       
        <input
          required
          placeholder="Product Title"
          className="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
        />
       {/*  <label> Product Price</label> */}
        <input
          required
          value={price}
          className="price"
          onChange={(event) => setPrice(event.target.value)}
          type="Number"
          placeholder='Price'
        />
        <label htmlFor="linkToPlatform"></label>
        <input type="text" 
        value={linkToPlatform}
        placeholder="linkToPlatform"
        onChange={(event) => setLinkToPlatform(event.target.value)}/>
        <h6> Product Image URL</h6>
       
        <div>{<UploadWidget onUpload={handleUpload} />}</div>
        <h6> {image.length >=1? "Your image is ready to upload":""}</h6>
        <button className="save-btn" type="submit"> Submit</button>
        <button className="cancel-btn" type="button" onClick={() => {
                setDisplayAddProductForm(false);
              }}>Cancel</button>
      </form>
    </div>
  );
}

export default ProductForm;
