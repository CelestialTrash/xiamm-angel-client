//REACT
import { Link } from "react-router-dom";

//CSS

import "./LogoAndMenuIcon.css";

function LogoAndMenuIcon() {
  return (
    <div className="logo-and-menu-icon-container">
      <Link to={"/"}>
        <button className="logo-button">X</button>
      </Link>

      <button className="menu-icon-button">◉</button>
    </div>
  );
}

export default LogoAndMenuIcon;
