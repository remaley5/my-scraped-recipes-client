import { useState } from "react";

import {
  emailValidator,
  passwordValidator,
} from "../Auth/authValidators";

const touchErrors = errors => {
  return Object.entries(errors).reduce((acc, [field, fieldError]) => {
    acc[field] = {
      ...fieldError,
      dirty: true,
    };
    return acc;
  }, {});
};

export const useLoginFormValidator = form => {
  const [errors, setErrors] = useState({
    email: {
      dirty: false,
      error: false,
      message: "",
    },
    password: {
      dirty: false,
      error: false,
      message: "",
    },
  });

  const validateForm = ({ form, field, errors, forceTouchErrors = false }) => {
    let isValid = true;

    // Create a deep copy of the errors
    let nextErrors = JSON.parse(JSON.stringify(errors));

    // Force validate all the fields
    if (forceTouchErrors) {
      nextErrors = touchErrors(errors);
    }

    const { email, password} = form;

    if (nextErrors.email.dirty && (field ? field === "email" : true)) {
      const emailMessage = emailValidator(email, form);
      nextErrors.email.error = !!emailMessage;
      nextErrors.email.message = emailMessage;
      if (!!emailMessage) isValid = false;
    }

    if (nextErrors.password.dirty && (field ? field === "password" : true)) {
      const passwordMessage = passwordValidator(password, form);
      nextErrors.password.error = !!passwordMessage;
      nextErrors.password.message = passwordMessage;
      if (!!passwordMessage) isValid = false;
    }

    setErrors(nextErrors);

    return {
      isValid,
      errors: nextErrors,
    };
  };

  // import { useState } from "react";
// import { fetchSignup, fetchLogin } from "../services/auth.service";

// export const useAuth = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState('false');

//     const setAuth = (val) => {
//         console.log('updating isLoggedIn', val);
//         setIsLoggedIn(val);
//         sessionStorage.setItem('isLoggedIn', val);
//         //console.log('isLoggedIn', isLoggedIn);
//     }

//     // check if user is signed in, update state and session
//     const checkSessionAuth = () => {
//         var auth = sessionStorage.getItem('isLoggedIn');  
//         // console.log('check session auth', auth);
//         // if auth is false or doesn't exist
//         if(!auth || auth === 'false') {
//             // console.log('setting auth false');
//             setAuth('false');
//         // if user is signed in update state
//         } else {
//             // console.log('setting auth true');
//             setIsLoggedIn('true');
//         }
//     }

//     const signupUser = async(user) => {
//         // post to db
//         const response = await fetchSignup(user);
//         const responseData = await(response.json());
//         // console.log('responseData', responseData);
//         // add userId to session
//         sessionStorage.setItem('user', responseData.id);
//         // set auth in session, update state
//         setAuth('true');
//         // re-route
//         //navigate('/home');
//     }

//     const loginUser = async(user) => {
//         const response = await fetchLogin(user);
//         const responseData = await(response.json());
//         sessionStorage.setItem('user', responseData.id);
//         setAuth('true');
//     }

//     const logoutUser = () => {
//         setAuth('false');
//         sessionStorage.removeItem('user');
//     }

//     return {isLoggedIn, signupUser, checkSessionAuth, loginUser, logoutUser};
// }


  // const onBlurField = e => {
  //   const field = e.target.name;
  //   const fieldError = errors[field];
  //   if (fieldError.dirty) return;

  //   const updatedErrors = {
  //     ...errors,
  //     [field]: {
  //       ...errors[field],
  //       dirty: true,
  //     },
  //   };

  //   validateForm({ form, field, errors: updatedErrors });
  // };

  return {
    validateForm,
    //onBlurField,
    errors,
  };
};