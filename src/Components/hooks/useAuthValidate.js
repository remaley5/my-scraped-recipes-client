import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import { fetchSignup } from "../services/auth.service";

export const useAuthValidator = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    //const navigate = useNavigate();


    const setAuth = (val) => {
        setIsLoggedIn(val);
        sessionStorage.setItem('isLoggedIn', val);
    }

    // check if user is signed in, update state and session
    const checkSessionAuth = () => {
        var auth = sessionStorage.getItem('isLoggedIn');    
        // if auth is false or doesn't exist
        if(!auth) {
            setAuth(false);
        // if user is signed in update state
        } else {
            setIsLoggedIn(true);
        }
    }

    const signupUser = async(user) => {
        // post to db
        const response = await fetchSignup(user);
        const responseData = await(response.json());
        // add userId to session
        sessionStorage.setItem('user', responseData.id);
        // set auth in session, update state
        setAuth(true);
        // re-route
        //navigate('/home');
    }

    const loginUser = (user) => {
        
    }

    return {isLoggedIn, signupUser, checkSessionAuth, loginUser};
}