//REACT
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { HashRouter as Router } from "react-router-dom";
 import { AuthProviderWrapper } from "./context/user.context.jsx"; 

//CSS
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProviderWrapper> 
      <Router>
        <App />
      </Router>
   </AuthProviderWrapper> 
  </StrictMode>
);
