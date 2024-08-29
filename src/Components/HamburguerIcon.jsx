//REACT
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//CSS
import "./HamburguerIcon.css";
//ASSETS
import appLogo from "../assets/dito-artist-logo-white.png"

function HamburguerIcon({ toggleNavbar, resetIcon }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    const newState = !isActive;
    setIsActive(newState);
    toggleNavbar(newState);
  };

  // Reset icon when the Navbar is closed
  useEffect(() => {
    if (!resetIcon) {
      setIsActive(false);
    }
  }, [resetIcon]);

  return (
    <section className="menu-section">
      <Link to="/">
        <img src={appLogo} alt="app-logo" />
      </Link>
      <div className={`menu-btn ${isActive ? 'active' : ''}`} onClick={handleClick}>
        <div className="menu-btn-burger"></div>
      </div>
    </section>
  );
}

export default HamburguerIcon;
