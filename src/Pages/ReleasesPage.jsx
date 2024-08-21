import ReleaseCard from "../Components/ReleaseCard"
import CreateReleaseForm from "../Components/CreateReleaseForm"
import { useState, useEffect } from "react"
import axios from "axios"
import './ReleasesPage.css'

const API_URL = import.meta.env.VITE_API_URL


function ReleasesPage() {
    const [displayForm, setDisplayForm] = useState(false)
    const [releases, setReleases] = useState([])
    
    const handleDisplayForm = () => {
        return setDisplayForm(!displayForm)
    }

    function getReleases() {
        axios.get(`${API_URL}/api/releases`)
            .then((response) => {
                setReleases(response.data);
            })
            .catch((error) => {
                console.error(error?.response.data.message);
            });
    }

    useEffect(() =>{
        getReleases()
    }, [])

    return(
        <section  id="releases-page">
            <div id="release-form-container">
                <button onClick={handleDisplayForm}>Make Release</button>
                { displayForm && <CreateReleaseForm onClick={handleDisplayForm}/>}
                

            </div>
            <ul id="card-container">
                {
                    releases && 
                    releases.map(({_id, title, producer, imageUrl}) => {
                        return <ReleaseCard key={_id} title={title} producer={producer} imageUrl={imageUrl}/>
                    })
                }
            </ul>
        </section>
    )
}

export default ReleasesPage