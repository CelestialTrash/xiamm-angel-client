import { createContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

const API_URL = import.meta.env.VITE_API_URL;


function AuthProviderWrapper (props) {
    const [user , setUser] = useState("")
    const authToken = localStorage.getItem("Authorization");


    useEffect(()=>{
        axios
            .get(`${API_URL}/auth/verify`, {
                headers: {Authorization: `Bearer ${authToken}`}
            })
            .then((response) => {
                /* console.log(response.data) */;

                setUser(response.data)
            })


    }, [])

    return (
        <AuthContext.Provider value={{ user }}>
          {props.children}
        </AuthContext.Provider>
      );



}

export { AuthProviderWrapper, AuthContext };
