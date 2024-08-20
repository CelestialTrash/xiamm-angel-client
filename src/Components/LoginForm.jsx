import { useState } from "react";
import "./FormStyles.css";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = { email, password };

    axios
      .post(`${API_URL}/auth/login`, user)
      .then((response) => {
        console.log("User is logged in!", response);
        const authToken = response.data.authToken;

        localStorage.setItem("Authorization", authToken)
        Navigate("/");
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage(error.response.data.message);

        setTimeout(() => {
          setErrorMessage(null);
        }, 10000);
      });
  };

  return (
    <section className="form-section">

    <form onSubmit={handleSubmit}>
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

      <button type="submit">Log In</button>
      <p className="error">{errorMessage}</p>
    </form>
    </section>
  );
}

export default LoginForm;