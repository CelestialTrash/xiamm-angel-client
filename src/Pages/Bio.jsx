//CSS
import "./Bio.css";
//REACT
import { useEffect } from "react";
//COMPONENTS
import Loader from "../Components/Loader";
import SocialLinks from "../Components/SocialLinks";


function Bio({bio, getBio, isLoading}) {

  useEffect(() => {
    getBio()
  }, [])

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
            <SocialLinks bio={bio} />
          </div>
        </div>
      }
    </section>
  );
}

export default Bio;
