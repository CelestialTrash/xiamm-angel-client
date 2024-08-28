//REACT
import { useState } from "react"
//CSS
import "./FormStyles.css"
//AXIOS
import axios from "axios"
//CLOUDINARY
import UploadWidget from "./UploadWidget"

const API_URL = import.meta.env.VITE_API_URL

function CreateReleaseForm({onClick, getReleases, cancelCreate}) {
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [producer, setProducer] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [linkToPlatform , setLinkToPlatform] = useState("")
    const [errorMessage, setErrorMessage] = useState()
    

    const authToken = localStorage.getItem("Authorization")

    const handlePostRelease = (e) => {
        e.preventDefault()

        const newRelease = {
            title,
            date,
            producer,
            imageUrl,
            linkToPlatform

        }
        

        if(authToken) {

            axios.post(`${API_URL}/api/releases`, newRelease, { headers: { Authorization: `Bearer ${authToken}`} })
                
                .then(() => getReleases())
                .then(() => cancelCreate())
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
        setImageUrl(e);
    }

    return(
        <section className="form-section">
            <form onSubmit={handlePostRelease}>
            <h1>Post a new release</h1>
                <label htmlFor="title">Title</label>
                <input onChange={(e) => setTitle(e.target.value)} type="text" name="title" className="title" value={title} />
                <label htmlFor="date">Date of release</label>
                <input onChange={(e) => setDate(e.target.value)} type="date" name="date" className="date" value={date}/>
                <label htmlFor="producer">Producer</label>
                <input onChange={(e) => setProducer(e.target.value)} type="text" name="producer" className="producer" value={producer}/>
                <label htmlFor="link">Link to platform</label>
                <input onChange={(e) => setLinkToPlatform(e.target.value)} type="text" name="linkToPlatform" className="linkToPlatform" value={linkToPlatform} />
                <label htmlFor="imageUrl">Image</label>
                <div>{<UploadWidget onUpload={handleUpload} />}</div>
                <img src={imageUrl} alt="" />

                <button className="save-btn" type="submit">Post</button>
                <button className="cancel-btn" type="button" onClick={onClick}>Cancel</button>
                <p className="error">{errorMessage}</p>
            </form>
        </section>
    )
}

export default CreateReleaseForm