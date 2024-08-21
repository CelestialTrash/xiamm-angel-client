import "./FormStyles.css"
import axios from "axios"
import { useState } from "react"

const API_URL = import.meta.env.VITE_API_URL

function EditReleaseForm({id, title, producer, imageUrl, date, cancelEdit}) {
    const [newTitle, setNewTitle] = useState(title)
    const [newDate, setNewDate] = useState(date)
    const [newProducer, setNewProducer] = useState(producer)
    const [newImageUrl, setNewImageUrl] = useState(imageUrl)
    const [errorMessage, setErrorMessage] = useState()

    const authToken = localStorage.getItem("Authorization")

    const handleEditRelease = (e) => {
        e.preventDefault()

        const updatedRelease = {
            title: newTitle,
            date: newDate,
            producer: newProducer,
            imageUrl: newImageUrl,
        }

        if(authToken) {
            axios.put(`${API_URL}/api/releases/${id}`, updatedRelease, { headers: { Authorization: `Bearer ${authToken}`} })
            .then((response) => {
                console.log("Release updated!", response);
            })
            .catch((error) => {
                console.error(error);
                setErrorMessage(error.response.data.message);
        
                setTimeout(() => {
                    setErrorMessage(null);
                }, 10000);
            });
        }
        
    }

    return(
        <section className="form-section">
            <form onSubmit={handleEditRelease}>
            <h1>Edit release</h1>
                <label htmlFor="title">Title</label>
                <input onChange={(e) => setNewTitle(e.target.value)} type="text" name="title" id="title" value={newTitle} />
                <label htmlFor="date">Date of release</label>
                <input onChange={(e) => setNewDate(e.target.value)} type="date" name="date" id="date" value={newDate} />
                <label htmlFor="producer">Producer</label>
                <input onChange={(e) => setNewProducer(e.target.value)} type="text" name="producer" id="producer" value={newProducer} />
                <label htmlFor="imageUrl">Image</label>
                <input onChange={(e) => setNewImageUrl(e.target.value)} type="text" name="imageUrl" id="imageUrl" value={newImageUrl} />

                <button type="submit">Save</button>
                <button type="button" onClick={cancelEdit}>Cancel</button>
                <p className="error">{errorMessage}</p>
            </form>
        </section>
    )
}

export default EditReleaseForm