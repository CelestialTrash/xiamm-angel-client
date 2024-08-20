import { useState } from "react";
import "./HamburguerIcon.css";

function HamburguerIcon({ toggleNavbar }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    toggleNavbar();
  };

  return (
    <section className="menu-section">
      <div className={`menu-btn ${isActive ? 'active' : ''}`} onClick={handleClick}>
        <div className="menu-btn-burger"></div>
      </div>
    </section>
  );
}

export default HamburguerIcon;
