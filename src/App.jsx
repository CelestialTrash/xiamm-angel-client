import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import SignupPage from "./Components/SignupForm"
import LoginPage from './Components/LoginForm'
import { useContext } from "react";
import { AuthContext } from "./context/user.context";




//CSS
import './App.css'

function App() {
  const { user } = useContext(AuthContext);
  console.log(user); 
  return (
    <>
      
      <Routes>
        <Route path="/" element={<h1>This is home</h1>} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm/>} />
      </Routes>
    </>
  )
}

export default App
