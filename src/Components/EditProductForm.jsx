import "./EditProductForm.css"
import axios from "axios"
import { useState } from "react"
//Cloudinary
import UploadWidget from "./UploadWidget";

const API_URL = import.meta.env.VITE_API_URL

function EditProductForm({id, title, price, imageUrl, cancelEdit,getProducts}) {
    const [newTitle, setNewTitle] = useState(title)
    const [newPrice, setNewPrice] = useState(price)
    const [newImage, setNewImage] = useState(imageUrl)
    const [errorMessage, setErrorMessage] = useState()
    
    const handleEditProduct = (e) => {
        e.preventDefault()
        const authToken = localStorage.getItem("Authorization")

        const updatedProduct = {
            title: newTitle,
            price: newPrice,
            imageUrl: newImage,
        }

        if(authToken) {
            axios.put(`${API_URL}/api/products/${id}`, updatedProduct, { headers: { Authorization: `Bearer ${authToken}`} })
            .then((response) => {
                console.log("Product updated", response);
            })
            .then(() => getProducts())
            .then(() => cancelEdit()) 
            .catch((error) => {
                console.error(error);
                setErrorMessage(error.response.data.message);
        
                setTimeout(() => {
                    setErrorMessage(null);
                }, 10000);
            });
        }
        
    }

    const handleUpload = (e) => {
        setNewImage(e);
      };

    return(
        <section className="form-section">
            <form id="edit-form" onSubmit={handleEditProduct}>
            <h1>Edit Product</h1>
                <label htmlFor="title">Title</label>
                <input onChange={(e) => setNewTitle(e.target.value)} type="text" name="title" id="title" value={newTitle} />
                <label htmlFor="price">Price</label>
                <input onChange={(e) => setNewPrice(e.target.value)} type="Number" name="price" id="price" value={newPrice} />
                <label htmlFor="image">Product Image URL</label>
                <div>{<UploadWidget onUpload={handleUpload} />}
                <img src={newImage} alt="" />
                <button className="save-btn" type="submit">Save</button>
                <button className="cancel-btn" type="button" onClick={cancelEdit}>Cancel</button>
                </div>
                <p className="error">{errorMessage}</p>
            </form>
        </section>
    )
}

export default EditProductForm