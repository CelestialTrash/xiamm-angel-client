//REACT
import { useEffect, useState } from 'react';
//CSS
import './HomePage.css'

//Axios
import axios from 'axios';

//ASSETS

import soundcloudLogo from '../assets/SocialMediaSVG/soundcloud-svgrepo-com.svg';
import spotifyLogo from '../assets/SocialMediaSVG/spotify-logo-fill-svgrepo-com.svg';
import instagramLogo from '../assets/SocialMediaSVG/instagram-svgrepo-com.svg';
import youtubeLogo from '../assets/SocialMediaSVG/youtube-168-svgrepo-com.svg';


const API_URL = import.meta.env.VITE_API_URL;

function HomePage() {
    const [latestRelease, setLatestRelease] = useState(null);
    useEffect(() => {
        
        axios
        .get(`${API_URL}/api/homepage/release`)
            .then((response) => {
                if (response.data && response.data.length > 0) {
                    setLatestRelease(response.data[0]); 
                }
            })
            .catch((error) => console.error("Error fetching latest release:", error));
    }, []);

    return(
        <section className='home-page-section'>
        <div className="social-links-section">
            <div className='social-links-container'>
            <img src={soundcloudLogo} className='soundcloud-logo' alt="SoundCloud Logo" />
      <img src={spotifyLogo} className='spotify-logo' alt="Spotify Logo" />
      <img src={instagramLogo} className='instagram-logo' alt="Instagram Logo" />
      <img src={youtubeLogo} className='youtube-logo' alt="YouTube Logo" />
            
                
            </div>

        </div>
        <div className="image-container">
                {latestRelease && (
                    <div className="latest-release">
                        <img src={latestRelease.imageUrl} alt={latestRelease.title} />
                         <h5>{latestRelease.title}</h5> 
                    
                    </div>
                )}
            </div>
        <div className='title-container'>
        <h1>Ditto Artist</h1>
        </div>
        
        </section>
    )
    
}
export default HomePage;
