import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import SignupForm from "./Components/SignupForm"
import LoginForm from './Components/LoginForm'
import { useContext } from "react";
import { AuthContext } from "./context/user.context";
import LogoAndMenuIcon from './Components/LogoAndMenuIcon';
import HomePage from './Pages/HomePage'




//CSS
import './App.css'
import Navbar from './Components/Navbar';

function App() {
  const { user } = useContext(AuthContext);
  console.log(user); 
  return (
    <>
    <LogoAndMenuIcon/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm/>} />
      </Routes>
    </>
  )
}

export default App
