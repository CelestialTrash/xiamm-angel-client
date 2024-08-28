import '../Components/FormStyles.css' 
import './EditProfilePage.css' 
import { useState, useEffect } from 'react'
import CheckboxInput from '../Components/CheckboxInput'
import axios from "axios";
import Loader from '../Components/Loader';
import { useNavigate } from 'react-router-dom';
const API_URL = import.meta.env.VITE_API_URL;

function EditProfilePage({bio, getBio, isLoading}) {
    const authToken = localStorage.getItem("Authorization");
    const [errorMessage, setErrorMessage] = useState()
    const navigate = useNavigate()
    const [newBio, setNewBio] = useState(bio)

    useEffect(() => {
        getBio()
    }, [])

    const handleTextInputChange = (event) => {
        const { id, value } = event.target
        setNewBio((prev) => ({
            ...prev,
            [id] : value,
        }))
    }

    const handleCheckboxChange = (event) => {
        const { id, value } = event.target;
        setNewBio((prev) => ({
            ...prev,
            socials: {
                ...prev.socials,
                [id]: value,
            },
        }));
    };

    const handleEditBio = (event) => {
        event.preventDefault();
        
        const updatedBio = {
            displayName: newBio.displayName,
            bio: newBio.bio,
            socials: newBio.socials
        }

        if(authToken) {
            axios.put(`${API_URL}/api/bio`, updatedBio, { headers: { Authorization: `Bearer ${authToken}`} })
                .then(() => getBio())
                .then(() => navigate("/bio"))
                .catch((error) => {
                    console.error(error);
                    setErrorMessage(error.response.data.message);
            
                    setTimeout(() => {
                        setErrorMessage(null);
                    }, 10000);
                });
        }
    }



    return (
        <section className="form-section">
            { isLoading ? <Loader /> : 
            <form className="edit-profile-form" onSubmit={handleEditBio}>
                <h2>Edit your bio</h2>
                <label htmlFor="displayName">Artist Name</label>
                <input onChange={handleTextInputChange} type="text" id="displayName" name="displayName" value={newBio.displayName}/>
                
                <label htmlFor="bio">Bio</label>
                <textarea onChange={handleTextInputChange} name="bio" id="bio" value={newBio.bio}/>
                
                <div className="socials">
                <label htmlFor="socials">Social Links</label>
                <div className="checkboxes">
                    <CheckboxInput 
                        id="spotify" 
                        name="Spotify" 
                        value={newBio.socials.spotify} 
                        onChange={handleCheckboxChange}
                        />
                    <CheckboxInput 
                        id="appleMusic" 
                        name="Apple Music" 
                        value={newBio.socials.appleMusic} 
                        onChange={handleCheckboxChange}
                        />
                    <CheckboxInput 
                        id="soundcloud" 
                        name="SoundCloud" 
                        value={newBio.socials.soundcloud} 
                        onChange={handleCheckboxChange}
                        />
                    <CheckboxInput 
                        id="youtube" 
                        name="Youtube" 
                        value={newBio.socials.youtube} 
                        onChange={handleCheckboxChange}
                        />
                    <CheckboxInput 
                        id="instagram" 
                        name="Instagram" 
                        value={newBio.socials.instagram} 
                        onChange={handleCheckboxChange}
                        />
                    <CheckboxInput 
                        id="x" 
                        name="X" 
                        value={newBio.socials.x} 
                        onChange={handleCheckboxChange}
                        />
                    <CheckboxInput 
                        id="tiktok" 
                        name="TikTok" 
                        value={newBio.socials.tiktok} 
                        onChange={handleCheckboxChange}
                        />
                    <CheckboxInput 
                        id="facebook" 
                        name="Facebook" 
                        value={newBio.socials.facebook} 
                        onChange={handleCheckboxChange}
                        />
                </div>
                </div>
                <button className="save-btn" type="submit">Save</button>
                <p className="error">{errorMessage}</p>
            </form>
            }
        </section>
    )
}

export default EditProfilePage