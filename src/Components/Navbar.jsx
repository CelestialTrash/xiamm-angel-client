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
            <Link to="/" onClick={closeNavbar}>
                    <h5 className="link-hover">HomePage</h5>
                </Link>
                <Link to="/releases" onClick={closeNavbar}>
                    <h5 className="link-hover">Releases</h5>
                </Link>
                <Link to="/products" onClick={closeNavbar}>
                    <h5 className="link-hover">Merch</h5>
                </Link>
                <Link to="/bio" onClick={closeNavbar}>
                    <h5 className="link-hover">Bio</h5>
                </Link>
               {user && <h5 onClick={() => {
                    handleLogout()
                    closeNavbar()
                    }} >Log Out</h5>}
            </div>
        </div>
    );
}

export default Navbar;