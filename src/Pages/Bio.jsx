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
          <div className="bio-title-container">
          <h2>{bio.displayName}</h2>
          <h3 cl>BIO</h3>
          </div>
          <div className="bio-container">
            <p className="bio-text">{bio.bio}</p>
          </div>
          {/* <div className="socials-container">
            <SocialLinks bio={bio} />
          </div> */}
        </div>
      }
    </section>
  );
}

export default Bio;
