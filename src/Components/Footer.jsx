import SocialLinks from "./SocialLinks";
import './Footer.css'
function Footer({bio}) {

    return(
        <div className="socials-container">
        <SocialLinks bio={bio} />
      </div>

    )
    
}

export default Footer;