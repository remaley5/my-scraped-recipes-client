// // import styles from '../Styles/App.css';
// //import { useEffect } from "react";
// import { useEffect } from "react";
import { useState } from "react";
import LoginForm from "./Auth/Login";
import SignUpForm from "./Auth/SignUp";
// import { useAuth } from "./hooks/useAuthValidate";
// import { useNavigate } from "react-router-dom";
//import { useAuth } from "./hooks/useAuthValidate";
// import { useNavigate } from "react-router-dom";


function LandingPage() {
    return (
        <div> 
            <h1>Welcome!</h1>
            <LoginForm/>
            <SignUpForm/>
        </div>
      );
    }
  
  export default LandingPage;