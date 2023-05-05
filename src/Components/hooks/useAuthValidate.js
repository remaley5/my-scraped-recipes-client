import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchSignup } from "../services/auth.service";

export const useAuthValidator = () => {
    const [authenticated, setAuthenticated] = useState(false);


    const setAuth = (val) => {
        setAuthenticated(val);
        sessionStorage.setItem('authenticated', val);
    }

    const checkSessionAuth = () => {
        var auth = sessionStorage.getItem('authenticated');
        if(!auth) {
            setAuth(false);
        } else {
            setAuthenticated(true);
        }
    }

    const signupUser = async(user) => {
        const response = await fetchSignup(user);
        const responseData = await(response.json());
        console.log('response.data: ', responseData.data);
        setAuth(true);

    }

    const loginUser = (user) => {
        
    }

    return {authenticated, signupUser, checkSessionAuth, loginUser};
}