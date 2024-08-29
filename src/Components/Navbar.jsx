//REACT
import { Link ,useNavigate} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/user.context";
//CSS
import './Navbar.css';






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
                    <h5 className="link-hover">Releases</h5>
                </Link>
                <Link to="/products" onClick={closeNavbar}>
                    <h5 className="link-hover">Merch</h5>
                </Link>
                <Link to="/bio" onClick={closeNavbar}>
                    <h5 className="link-hover">Bio</h5>
                </Link>
                {user && (
                    <div className="user-nav-tabs">
                    <hr />

                    <Link to="/edit-bio" onClick={closeNavbar}>
                        <h5 className="link-hover">Edit Bio</h5>
                    </Link>
                    
                    <h5 className="log-out" onClick={() => {
                        handleLogout()
                        closeNavbar()
                    }}>Log Out</h5>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;