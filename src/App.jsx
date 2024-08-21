import { useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import SignupForm from "./Components/SignupForm";
import LoginForm from "./Components/LoginForm";
import Bio from "./Pages/Bio";
import { AuthContext } from "./context/user.context";
import HamburguerIcon from "./Components/HamburguerIcon";
import HomePage from "./Pages/HomePage";
import ReleasesPage from "./Pages/ReleasesPage";
import Navbar from "./Components/Navbar";
import "./App.css";
import NotFoundPage from "./Pages/NotFoundPage";
import ProductsPage from "./Pages/ProductsPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";

function App() {
  const { user } = useContext(AuthContext);
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

  /* console.log(user);  */

  return (
    <>
      <HamburguerIcon toggleNavbar={toggleNavbar} resetIcon={isNavbarVisible} />
      {isNavbarVisible && (
        <Navbar isNavbarClosing={isNavbarClosing} closeNavbar={closeNavbar} />
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/Bio" element={<Bio />} />
        <Route path="/releases" element={<ReleasesPage />} />
        <Route path="/releases/:releaseId" element={<h1>Release Details</h1>} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<ProductDetailsPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
