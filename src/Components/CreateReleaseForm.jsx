import "./FormStyles.css"
import axios from "axios"
import { useState } from "react"

const API_URL = import.meta.env.VITE_API_URL

function CreateReleaseForm({onClick}) {
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [producer, setProducer] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [errorMessage, setErrorMessage] = useState()

    const authToken = localStorage.getItem("Authorization")

    const handlePostRelease = (e) => {
        e.preventDefault()

        const newRelease = {
            title,
            date,
            producer,
            imageUrl
        }
        

        if(authToken) {

            axios.post(`${API_URL}/api/releases`, newRelease, { headers: { Authorization: `Bearer ${authToken}`} })
                .then((response) => {
                    console.log("Release posted!", response);
                    location.reload()
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
            <form onSubmit={handlePostRelease}>
            <h1>Post a new release</h1>
                <label htmlFor="title">Title</label>
                <input onChange={(e) => setTitle(e.target.value)} type="text" name="title" id="title" value={title} />
                <label htmlFor="date">Date of release</label>
                <input onChange={(e) => setDate(e.target.value)} type="date" name="date" id="date" value={date}/>
                <label htmlFor="producer">Producer</label>
                <input onChange={(e) => setProducer(e.target.value)} type="text" name="producer" id="producer" value={producer}/>
                <label htmlFor="imageUrl">Image</label>
                <input onChange={(e) => setImageUrl(e.target.value)} type="text" name="imageUrl" id="imageUrl" value={imageUrl}/>

                <button type="submit">Post</button>
                <button type="button" onClick={onClick}>Cancel</button>
                <p className="error">{errorMessage}</p>
            </form>
        </section>
    )
}

export default CreateReleaseForm