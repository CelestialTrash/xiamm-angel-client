import '../Components/FormStyles.css' 
import './EditProfilePage.css' 
import { useState } from 'react'
import CheckboxInput from '../Components/CheckboxInput'

function EditProfilePage() {
    const [bio, setBio] = useState({
        displayName: "",
        bio: "",
        socials: {
            spotify: "",
            appleMusic: "",
            soundcloud: "",
            youtube: "",
            instagram: "",
            x: "",
            tiktok: "",
            facebook: ""
        }
    })

    const handleCheckboxChange = (event) => {
        const { id, value } = event.target;
        setBio((prev) => ({
            ...prev,
            socials: {
                ...prev.socials,
                [id]: value,
            },
        }));
    };

    const handleBioSubmit = () => {

    }

    return (
        <section className="form-section">
            <form className="edit-profile-form">
                <label htmlFor="displayName">Artist Name</label>
                <input type="text" id="displayName" name="displayName"/>
                
                <label htmlFor="bio">Bio</label>
                <textarea name="bio" id="bio" />
                
                <div className="socials">
                <label htmlFor="socials">Social Links</label>
                <div className="checkboxes">
                    <CheckboxInput 
                        id="spotify" 
                        name="Spotify" 
                        value={bio.socials.spotify} 
                        onChange={handleCheckboxChange}
                    />
                    <CheckboxInput 
                        id="appleMusic" 
                        name="Apple Music" 
                        value={bio.socials.appleMusic} 
                        onChange={handleCheckboxChange}
                    />
                    <CheckboxInput 
                        id="soundcloud" 
                        name="SoundCloud" 
                        value={bio.socials.soundcloud} 
                        onChange={handleCheckboxChange}
                    />
                    <CheckboxInput 
                        id="youtube" 
                        name="Youtube" 
                        value={bio.socials.youtube} 
                        onChange={handleCheckboxChange}
                    />
                    <CheckboxInput 
                        id="instagram" 
                        name="Instagram" 
                        value={bio.socials.instagram} 
                        onChange={handleCheckboxChange}
                    />
                    <CheckboxInput 
                        id="x" 
                        name="X" 
                        value={bio.socials.x} 
                        onChange={handleCheckboxChange}
                    />
                    <CheckboxInput 
                        id="tiktok" 
                        name="TikTok" 
                        value={bio.socials.tiktok} 
                        onChange={handleCheckboxChange}
                    />
                    <CheckboxInput 
                        id="facebook" 
                        name="Facebook" 
                        value={bio.socials.facebook} 
                        onChange={handleCheckboxChange}
                    />
                </div>
                </div>
                <button className="save-btn">Save</button>
            </form>
        </section>
    )
}

export default EditProfilePage