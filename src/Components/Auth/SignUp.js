import { useState } from "react";
import '../../Styles/forms.css';

function SignUpForm() {
    const [form, setForm] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const onUpdateField = e => {
        const nextFormState = {
            ...form,
            [e.target.name]: e.target.value,
        };
        setForm(nextFormState);
    };

    const onSubmitForm = e => {
        e.preventDefault();
        alert(JSON.stringify(form, null, 2));
    };

    return (
        <form className="form" onSubmit={onSubmitForm}>
            <div className="formGroup">
                <label for="signup-email" className="formLabel">Email<span className="required">required</span></label>
                <input
                    aria-required="true"
                    className="formField"
                    type="text"
                    id="signup-email"
                    name="email"
                    value={form.email}
                    onChange={onUpdateField}
                />
            </div>
            <div className="formGroup">
                <label for="signup-password" className="formLabel">Password <span className="required">required</span></label>
                <input
                    aria-required="true"
                    className="formField"
                    type="password"
                    id="signup-password"
                    name="password"
                    value={form.password}
                    onChange={onUpdateField}
                />
            </div>
            <div className="formGroup">
                <label for="signup-confirm-password" className="formLabel">Confirm Password<span className="required">required</span></label>
                <input
                    aria-required="true"
                    className="formField"
                    type="password"
                    id="signup-confirm-password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={onUpdateField}
                />
            </div>
            <label for="signup-username" className="formLabel">Pick a username!<span className="required">required</span></label>
            <input
                aria-required="true"
                className="formField"
                type="text"
                id="signup-username"
                name="email"
                value={form.username}
                onChange={onUpdateField}
            />
            <div className="formActions">
                <button className="formSubmitBtn" type="submit">
                    Login
                </button>
            </div>
        </form>
    );
};

export default SignUpForm;