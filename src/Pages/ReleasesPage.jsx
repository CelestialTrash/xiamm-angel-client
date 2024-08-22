import ReleaseCard from "../Components/ReleaseCard"
import CreateReleaseForm from "../Components/CreateReleaseForm"
import EditReleaseForm from "../Components/EditReleaseForm"
import WarningRelease from "../Components/WarningRelease"
import { useState, useEffect } from "react"
import axios from "axios"
import './ReleasesPage.css'
import { useNavigate } from "react-router-dom"

const API_URL = import.meta.env.VITE_API_URL


function ReleasesPage() {
    //Create Form
    const [displayForm, setDisplayForm] = useState(false)
    const [releases, setReleases] = useState([])
    
    const handleDisplayCreateForm = () => {
        return setDisplayForm(!displayForm)
    }

    const handleCancelCreate = () => {
        setDisplayForm(false);
    };

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


    //Delete item
    const [releaseWarning, setReleaseWarning] = useState(false)
    const [idToDelete, setIdToDelete] = useState("")
    const navigate = useNavigate()
    const authToken = localStorage.getItem("Authorization")

    function deleteRelease(id) {
        axios
            .delete(`${API_URL}/api/releases/${id}`, { headers: { Authorization: `Bearer ${authToken}`} })
            .then(() => getReleases())
            .catch((error) => {
                console.error(error?.response.data.message);
            });
    }

    const displayWarning = (id) => {
        setReleaseWarning(true);
        setIdToDelete(id)
    }

    //Loader
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])

    return (
        <>
            {isLoading ? <div>Loading...</div> : (
            <section id="releases-page">
                <div id="release-form-container">
                    <button onClick={handleDisplayCreateForm}>Make Release</button>
                    {displayForm && <CreateReleaseForm onClick={handleDisplayCreateForm} getReleases={getReleases} cancelCreate={handleCancelCreate}/>}

                </div>
                {isLoading ? <div>Loading...</div> : (
                <ul id="card-container">
                    {
                        releases &&
                        releases.map(({ _id, title, producer, imageUrl, date }) => {
                            return (
                                <li className="card" key={_id}>
                                    <ReleaseCard title={title} producer={producer} imageUrl={imageUrl} />
                                    <button onClick={() => handleDisplayEditForm(_id)}>Edit</button>
                                    {editReleaseId === _id && <EditReleaseForm id={_id} title={title} producer={producer} date={date} imageUrl={imageUrl} cancelEdit={handleCancelEdit} getReleases={getReleases} />}
                                    <button onClick={() => displayWarning(_id)}>Delete</button>
                                    {releaseWarning && idToDelete === _id && <WarningRelease deleteRelease={deleteRelease} setReleaseWarning={setReleaseWarning} idToDelete={_id} />}
                                </li>
                            )
                        })
                    }
                </ul>
                )}
            </section>
        )}
        </>
    )
}

export default ReleasesPage