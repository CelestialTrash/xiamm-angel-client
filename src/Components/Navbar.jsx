import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar({ closeNavbar, isNavbarClosing }) {
    return (
        <div className={`navbar-container ${!isNavbarClosing ? '' : 'fadeout'}`}>
            <div className="text-container">
                <Link to="/releases" onClick={closeNavbar}>
                    <h2 className="link-hover">Releases</h2>
                </Link>
                <Link to="/products" onClick={closeNavbar}>
                    <h2 className="link-hover">Merch</h2>
                </Link>
                <Link to="/bio" onClick={closeNavbar}>
                    <h2 className="link-hover">Bio</h2>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;