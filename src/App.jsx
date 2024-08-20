import { useState, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignupForm from "./Components/SignupForm";
import LoginForm from './Components/LoginForm';
import Bio from './Pages/Bio';
import { AuthContext } from "./context/user.context";
import HamburguerIcon from './Components/HamburguerIcon';
import HomePage from './Pages/HomePage';
import ReleasesPage from './Pages/ReleasesPage';
import Navbar from './Components/Navbar';
import './App.css';

function App() {
  const { user } = useContext(AuthContext);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = (newState) => {
    setIsNavbarVisible(newState);
  };

  const closeNavbar = () => {
    setIsNavbarVisible(false);
  };

  console.log(user); 

  return (
    <>
      <HamburguerIcon toggleNavbar={toggleNavbar} resetIcon={isNavbarVisible} />
      {isNavbarVisible && <Navbar closeNavbar={closeNavbar} />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/Bio" element={<Bio />} />
        <Route path="/releases" element={<ReleasesPage />} />
        <Route path="/releases/:releaseId" element={<h1>Release Details</h1>} />
        <Route path="/products" element={<h1>hola</h1>} />
        <Route path="/products/:productId" element={<h1>Product Details</h1>} />
      </Routes>
    </>
  );
}

export default App;