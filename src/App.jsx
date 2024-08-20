import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import SignupForm from "./Components/SignupForm"
import LoginForm from './Components/LoginForm'
import Bio from './Pages/Bio'
import { useContext } from "react";
import { AuthContext } from "./context/user.context";
import HamburguerIcon from './Components/HamburguerIcon';
import HomePage from './Pages/HomePage'

import ReleasesPage from './Pages/ReleasesPage';



//CSS
import './App.css'
import Navbar from './Components/Navbar';

function App() {
  const { user } = useContext(AuthContext);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };



  console.log(user); 
  return (
    <>
    <HamburguerIcon toggleNavbar={toggleNavbar} />
    {isNavbarVisible && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/Bio" element={<Bio/>} />
        <Route path="/releases" element={<ReleasesPage />}/>
        <Route path="/releases/:releaseId" element={<h1>Release Details</h1>}/>
        <Route path="/products" element={<ProductsPage />}/>
        <Route path="/products/:productId" element={<h1>Product Details</h1>}/>
      </Routes>
    </>
  )
}

export default App
