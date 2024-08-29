//REACT
import { useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
//Axios
import axios from "axios";
//COMPONENTS
import HamburguerIcon from "./Components/HamburguerIcon";
import Navbar from "./Components/Navbar";
//CSS
import './Components/ButtonStyles.css'
import "./App.css";
//PAGES
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import Bio from "./Pages/Bio";
import HomePage from "./Pages/HomePage";
import ReleasesPage from "./Pages/ReleasesPage";
import NotFoundPage from "./Pages/NotFoundPage";
import ProductsPage from "./Pages/ProductsPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import EditProfilePage from "./Pages/EditProfilePage";
import Footer from './Components/Footer'
//ASSETS
import placeholderImage from "./assets/NA-image.png"




const API_URL = import.meta.env.VITE_API_URL;

function App() {
  
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isNavbarClosing, setIsNavbarClosing] = useState(false);

  const toggleNavbar = (newState) => {
    if (newState) {
      setIsNavbarVisible(newState);
    } else {
      setIsNavbarClosing(true);
      setTimeout(() => {
        setIsNavbarVisible(newState);
        setIsNavbarClosing(false);
      }, 400);
    }
  };

  const closeNavbar = () => {
    setIsNavbarClosing(true);

    setTimeout(() => {
      setIsNavbarVisible(false);
      setIsNavbarClosing(false);
    }, 400);
  };

  const [isLoading, setIsLoading] = useState(true)
  const [sharedBio, setSharedBio] = useState({
    displayName: "",
    bio: "",
    socials : {
      spotify: "",
      appleMusic: "",
      soundcloud: "",
      youtube: "",
      instagram: "",
      x: "",
      tiktok: "",
      facebook: ""
    }
  })

  function getBio() {
    setIsLoading(true)
    axios.get(`${API_URL}/api/bio`)
        .then((response) => {
            setSharedBio(response.data[0]);
            setIsLoading(false)
        })
        .catch((error) => {
            console.log(error);
            
            console.error(error?.response.data.message);
        });
  }

  useEffect(() => {
    getBio()
  }, [])


  return (
    <>
      <HamburguerIcon toggleNavbar={toggleNavbar} resetIcon={isNavbarVisible} />
      {isNavbarVisible && (
        <Navbar isNavbarClosing={isNavbarClosing} closeNavbar={closeNavbar} />
      )}
      <Routes>
        <Route path="/" element={<HomePage bio={sharedBio} getBio={getBio}/>} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/bio" element={<Bio bio={sharedBio} getBio={getBio} isLoading={isLoading}/>} />
        <Route path="/edit-bio" element={<EditProfilePage bio={sharedBio} getBio={getBio} isLoading={isLoading}/>} />
        <Route path="/releases" element={<ReleasesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<ProductDetailsPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer bio={sharedBio}/>
    </>
  );
}

export default App;
