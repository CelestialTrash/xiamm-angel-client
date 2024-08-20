import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import SignupForm from "./Components/SignupForm"
import LoginForm from './Components/LoginForm'
import Bio from './Pages/Bio'
import { useContext } from "react";
import { AuthContext } from "./context/user.context";
import HamburguerIcon from './Components/HamburguerIcon';
import HomePage from './Pages/HomePage'




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

      </Routes>
    </>
  )
}

export default App
