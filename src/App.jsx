import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import SignupPage from "./Components/SignupPage"
import LoginPage from './Components/LoginPage'
import { useContext } from "react";
import { AuthContext } from "./context/user.context";
import ReleasesPage from './Pages/ReleasesPage';



//CSS
import './App.css'

function App() {
  const { user } = useContext(AuthContext);
  console.log(user); 
  return (
    <>
      
      <Routes>
        <Route path="/" element={<h1>This is home</h1>} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/releases" element={<ReleasesPage />}/>
        <Route path="/releases/:releaseId" element={<h1>Release Details</h1>}/>
        <Route path="/products" element={<ProductsPage />}/>
        <Route path="/products/:productId" element={<h1>Product Details</h1>}/>
      </Routes>
    </>
  )
}

export default App
