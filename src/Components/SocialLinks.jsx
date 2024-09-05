//ICONS
import spotify from "../assets/SocialMediaSVG/spotify-logo-fill-svgrepo-com.svg"
import appleMusic from "../assets/SocialMediaSVG/icons8-apple-music.svg"
import soundcloud from "../assets/SocialMediaSVG/soundcloud-svgrepo-com.svg"
import youtube from "../assets/SocialMediaSVG/youtube-168-svgrepo-com.svg"
import instagram from "../assets/SocialMediaSVG/instagram-svgrepo-com.svg"
import x from "../assets/SocialMediaSVG/icons8-twitterx.svg"
import tiktok from "../assets/SocialMediaSVG/tiktok-fill-svgrepo-com.svg"
import facebook from "../assets/SocialMediaSVG/facebook-fill-svgrepo-com.svg"

function SocialLinks({bio}) {
    if (!bio) return null;
    const renderSocialLink = (platform, url, icon) => {
        if(!url) return null;
        return (
            <a target="_blank" rel="noopener noreferrer" href={url}>
                <img className="social-links" src={icon} alt={platform} />
            </a>
        )
    }
    return(
        <>
            {renderSocialLink('Spotify', bio.socials.spotify, spotify)}
            {renderSocialLink('Apple Music', bio.socials.appleMusic, appleMusic)}
            {renderSocialLink('Soundcloud', bio.socials.soundcloud, soundcloud)}
            {renderSocialLink('Youtube', bio.socials.youtube, youtube)}
            {renderSocialLink('Instagram', bio.socials.instagram, instagram)}
            {renderSocialLink('X', bio.socials.x, x)}
            {renderSocialLink('TikTok', bio.socials.tiktok, tiktok)}
            {renderSocialLink('Facebook', bio.socials.facebook, facebook)}
        </>
    )
}

export default SocialLinks