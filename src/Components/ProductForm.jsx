import "./ProductForm.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const API_URL = import.meta.env.VITE_API_URL;
const storedToken = localStorage.getItem("Authorization");


function ProductForm() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(9.99);
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const newProduct = { title, price, image };
    e.preventDefault();
    /* console.log(storedToken); */

    axios
      .post(`${API_URL}/api/products`,newProduct,{ headers: { Authorization: `Bearer ${storedToken}` } } )
      .then((response) => {
        const newProduct = response.data;

        navigate(`/products/${newProduct._id}`); //review this route with the app routes
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="create-product-layout">
      <form className="create-product-form" onSubmit={handleSubmit}>
        <h3> Create Product</h3>
        <label> Product Title</label>
        <textarea
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
        />
        <label> Product Price</label>
        <textarea
          required
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          type="Number"
        />
        <label> Product Image URL</label>
        {/*  URL for now, would need to use Supabase first and then pass on but we do this later.  */}
        <textarea
          required
          value={image}
          onChange={(event) => setImage(event.target.value)}
          type="text"
        />
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
}

export default ProductForm;