import { useState } from "react";
import { fetchSignup } from "../services/auth.service";

export const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState('false');


    const setAuth = (val) => {
        setIsLoggedIn(val);
        sessionStorage.setItem('isLoggedIn', val);
    }

    // check if user is signed in, update state and session
    const checkSessionAuth = () => {
        var auth = sessionStorage.getItem('isLoggedIn');  
        // console.log('check session auth', auth);
        // if auth is false or doesn't exist
        if(!auth || auth === 'false') {
            // console.log('setting auth false');
            setAuth('false');
        // if user is signed in update state
        } else {
            // console.log('setting auth true');
            setIsLoggedIn('true');
        }
    }

    const signupUser = async(user) => {
        // post to db
        const response = await fetchSignup(user);
        const responseData = await(response.json());
        // console.log('responseData', responseData);
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