import "./ProductForm.css";
import { useState } from "react";

function ProductForm() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(9.99);
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    const newProduct = { title, price, image };
    e.preventDefault();

    axios
      .post(`${API_URL}/api/products`, newProduct)
      .then((response) => {
        const newProduct = response.data;

        navigate(`/catalog/products/${newCohort._id}`); //review this route with the app routes
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
          value={text}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
        />
        <label> Product Price</label>
        <textarea
          required
          value={Number}
          onChange={(event) => setPrice(event.target.value)}
          type="Number"
        />
        <label> Product Image URL</label>
        {/*  URL for now, would need to use Supabase first and then pass on but we do this later.  */}
        <textarea
          required
          value={text}
          onChange={(event) => setImage(event.target.value)}
          type="text"
        />
      </form>
    </div>
  );
}

export default ProductForm;