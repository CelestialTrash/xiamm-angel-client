import ReleaseCard from "../Components/ReleaseCard"
import CreateReleaseForm from "../Components/CreateReleaseForm"
import EditReleaseForm from "../Components/EditReleaseForm"
import { useState, useEffect } from "react"
import axios from "axios"
import './ReleasesPage.css'

const API_URL = import.meta.env.VITE_API_URL


function ReleasesPage() {
    //Create Form
    const [displayForm, setDisplayForm] = useState(false)
    const [releases, setReleases] = useState([])
    
    const handleDisplayCreateForm = () => {
        return setDisplayForm(!displayForm)
    }

    //Edit Form
    const [editReleaseId, setEditReleaseId] = useState(null)
    
    const handleDisplayEditForm = (releaseId) => {
        return setEditReleaseId(releaseId)
    }

    const handleCancelEdit = () => {
        setEditReleaseId(null);
    };

    //Get items
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
                <button onClick={handleDisplayCreateForm}>Make Release</button>
                { displayForm && <CreateReleaseForm onClick={handleDisplayCreateForm}/>}
                

            </div>
            <ul id="card-container">
                {
                    releases && 
                    releases.map(({_id, title, producer, imageUrl, date}) => {
                        return (
                                <li className="card" key={_id}>
                                <ReleaseCard title={title} producer={producer} imageUrl={imageUrl}/>
                                <button onClick={() => handleDisplayEditForm(_id)}>Edit</button>
                                {editReleaseId === _id && <EditReleaseForm id={_id} title={title} producer={producer} date={date} imageUrl={imageUrl} cancelEdit={handleCancelEdit} />}
                                <button>Delete</button>
                                </li>
                            )
                    })
                }
            </ul>
        </section>
    )
}

export default ReleasesPage