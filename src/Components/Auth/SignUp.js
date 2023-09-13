import { useState } from "react";
import '../../Styles/forms.css';
import {useSignupFormValidator} from "../hooks/useSignupValidators";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
    const [form, setForm] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const {errors, validateForm } = useSignupFormValidator(form);
    const {signupUser} = useAuth();
    const navigate = useNavigate();
    
    const onUpdateField = e => {
        const field = e.target.name;
        const nextFormState = {
            ...form,
            [field]: e.target.value,
        };
        setForm(nextFormState);
        if(errors[field].dirty)
            validateForm({
                form: nextFormState, 
                errors, 
                field
            });

    };

    const onSubmitForm = e => {
        e.preventDefault();
        const {isValid} = validateForm({form, errors, forceTouchErrors: true});
        // console.log('submit ', isValid);
        if(!isValid) return;
        // console.log('signup valid', form);
        if(isValid) {
            const signup = async() => {
                await signupUser(form);
                // console.log('signedup', isLoggedIn);
                navigate('/home');
            }
            signup();
        }
    };

    return (
        <form className="form" onSubmit={onSubmitForm}>
            <div className="formGroup">
                <label for="signup-email" className="formLabel">Email<span className="required"> required</span></label>
                <input
                    aria-required="true"
                    className="formField"
                    type="text"
                    id="signup-email"
                    name="email"
                    value={form.email}
                    onChange={onUpdateField}
                />
                {errors.email.dirty && errors.email.error ? (
          <p className="error">{errors.email.message}</p>
        ) : null}
            </div>
            <div className="formGroup">
                <label for="signup-password" className="formLabel">Password <span className="required"> required</span></label>
                <input
                    aria-required="true"
                    className="formField"
                    type="password"
                    id="signup-password"
                    name="password"
                    value={form.password}
                    onChange={onUpdateField}
                />
                {errors.password.dirty && errors.password.error ? (
          <p className="error">
            {errors.password.message}
          </p>
        ) : null}
            </div>
            <div className="formGroup">
                <label for="signup-confirm-password" className="formLabel">Confirm Password<span className="required"> required</span></label>
                <input
                    aria-required="true"
                    className="formField"
                    type="password"
                    id="signup-confirm-password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={onUpdateField}
                />
                {errors.confirmPassword.dirty && errors.confirmPassword.error ? (
          <p className="error">
            {errors.confirmPassword.message}
          </p>
        ) : null}
            </div>
            <div className="formGroup">
            <label for="signup-username" className="formLabel">Pick a username <span className="required"> required</span></label>
            <input
                aria-required="true"
                className="formField"
                type="text"
                id="signup-username"
                name="username"
                value={form.username}
                onChange={onUpdateField}
            />
            </div>
            {errors.username.dirty && errors.username.error ? (
          <p className="error">
            {errors.username.message}
          </p>
        ) : null}
            <div className="formActions">
                <button className="formSubmitBtn" type="submit">
                    Sign Up
                </button>
            </div>
        </form>
    );
};

export default SignUpForm;