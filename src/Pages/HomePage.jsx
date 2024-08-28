//REACT
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//CSS
import "./HomePage.css";
//Axios
import axios from "axios";
//COMPONENTS
import SocialLinks from "../Components/SocialLinks";

//ASSETS
import backgroundVideo from "../assets/BackgroundImg/mixkit-a-light-mist-continuously-flows-generating-a-soft-light-texture-50939-full-hd.mp4";


const API_URL = import.meta.env.VITE_API_URL;

function HomePage({bio, getBio}) {
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
    getBio();
  }, []);

  return (
    <section className="home-page-section">
      <video autoPlay muted loop className="video-homepage" src={backgroundVideo}></video>
      <div className="social-links-section">
        <div className="social-links-container">
          <SocialLinks bio={bio}/>
        </div>
      </div>
      <div className="image-container">
        {latestRelease && (
          <div className="latest-release">
            <Link target="_blank" to={latestRelease.linkToPlatform}>
              {" "}
              <img src={latestRelease.imageUrl} alt={latestRelease.title} />
            </Link>
            <h2>{latestRelease.title}</h2>
            
          </div>
        )}
      </div>
      <div className="title-container">
        <h1>{bio.displayName}</h1>
      </div>
    </section>
  );
}
export default HomePage;
