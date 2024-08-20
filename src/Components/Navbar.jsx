//REACT
import { Link } from "react-router-dom";

//CSS

import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar-container">
            <div className="text-container">
                <Link to={"/releases"}>
                <h2 className="link-hover">Releases</h2>
                </Link>

                <Link to={"./catalog"}>
                <h2 className="link-hover">Merch</h2>
                </Link>

                <Link to={"/bio"}>
                <h2 className="link-hover">Bio</h2>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;