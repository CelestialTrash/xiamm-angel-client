//REACT
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
//AXIOS
import axios from "axios";

//CSS
import "../Components/FormStyles.css";


const API_URL = import.meta.env.VITE_API_URL;

function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage,setErrorMessage] = useState("")

  const handleSubmit =  (event) => {
    event.preventDefault();

    const newUser = {
      name: name,
      email: email,
      password: password
    }

    axios
        .post(`${API_URL}/auth/signup`, newUser)
        .then((response) => {
          console.log("User created!", response);
          Navigate("/login")
        })
        .catch((error) => {
          setErrorMessage(error.response.data.message)
    
          setTimeout(() => {
            setErrorMessage(null);
          }, 10000);
        })
    
        console.log(newUser);
  }



  return (
    <section className="form-section">

      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button className="signup-btn" type="submit">Sign Up</button>
        <p>{errorMessage}</p>
      </form>
    </section>
    
    
  );
}

export default SignupPage;
