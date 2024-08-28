//CSS
import "./Bio.css";
import { useState, useEffect } from "react";
import Loader from "../Components/Loader";
import axios from "axios";
import spotify from "../assets/SocialMediaSVG/spotify-logo-fill-svgrepo-com.svg"
import appleMusic from "../assets/SocialMediaSVG/icons8-apple-music.svg"
import soundcloud from "../assets/SocialMediaSVG/soundcloud-svgrepo-com.svg"
import youtube from "../assets/SocialMediaSVG/youtube-168-svgrepo-com.svg"
import instagram from "../assets/SocialMediaSVG/instagram-svgrepo-com.svg"
import x from "../assets/SocialMediaSVG/icons8-twitterx.svg"
import tiktok from "../assets/SocialMediaSVG/tiktok-fill-svgrepo-com.svg"
import facebook from "../assets/SocialMediaSVG/facebook-fill-svgrepo-com.svg"

const API_URL = import.meta.env.VITE_API_URL;

function Bio() {
  const [isLoading, setIsLoading] = useState(true)
  const [bio, setBio] = useState({
    displayName: "",
    bio: "",
    socials : {
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

  function getBio() {
    setIsLoading(true)
    axios.get(`${API_URL}/api/bio`)
        .then((response) => {
            setBio(response.data[0]);
            setIsLoading(false)
        })
        .catch((error) => {
            console.log(error);
            
            console.error(error?.response.data.message);
        });
  }

  useEffect(() => {
    getBio()
  }, [])

  const renderSocialLink = (platform, url, icon) => {
    if(!url) return null;
    return (
      <a target="_blank" rel="noopener noreferrer" href={url}>
        <img src={icon} alt={platform} />
      </a>
    )
  }

  return (
    <section className="bio-section">
      {isLoading ? <Loader /> : 
        <div className="bio-info">
          <h2>{bio.displayName}</h2>
          <h3>BIO</h3>
          <div className="bio-container">
            <p>{bio.bio}</p>
          </div>
          <div className="socials-container">
            {renderSocialLink('Spotify', bio.socials.spotify, spotify)}
            {renderSocialLink('Apple Music', bio.socials.appleMusic, appleMusic)}
            {renderSocialLink('Soundcloud', bio.socials.soundcloud, soundcloud)}
            {renderSocialLink('Youtube', bio.socials.youtube, youtube)}
            {renderSocialLink('Instagram', bio.socials.instagram, instagram)}
            {renderSocialLink('X', bio.socials.x, x)}
            {renderSocialLink('TikTok', bio.socials.tiktok, tiktok)}
            {renderSocialLink('Facebook', bio.socials.facebook, facebook)}
          </div>
        </div>
      }
    </section>
  );
}

export default Bio;
