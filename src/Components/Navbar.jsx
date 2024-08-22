import { Link } from "react-router-dom";
import './Navbar.css';
import { useContext } from "react";
import { AuthContext } from "../context/user.context";
import { useNavigate } from "react-router-dom";





function Navbar({ closeNavbar, isNavbarClosing }) {
    const {verifyUser,user} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        
        localStorage.removeItem("Authorization")
        verifyUser()
        navigate("/")
    }



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
               {user && <h2 onClick={() => {
                    handleLogout()
                    closeNavbar()
                    }} >Log Out</h2>}
            </div>
        </div>
    );
}

export default Navbar;