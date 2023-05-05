import { useState } from "react";
import '../../Styles/forms.css';
import { useLoginFormValidator } from "../hooks/useLoginValidators";

const LoginForm = props => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  //const { errors, validateForm, onBlurField } = useLoginFormValidator(form);
  const { errors, validateForm } = useLoginFormValidator(form);

  const onUpdateField = e => {
    const field = e.target.name;
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
    if (errors[field].dirty)
      validateForm({
        form: nextFormState,
        errors,
        field,
      });
  };

  const onSubmitForm = e => {
    e.preventDefault();
    const { isValid } = validateForm({ form, errors, forceTouchErrors: true });
    if (!isValid) return;
    alert(JSON.stringify(form, null, 2));
  };

  return (
    <form onSubmit={onSubmitForm}>
      <div className="formGroup">
        <label for="login-email" className="formLabel">Email<span className="required"> required</span></label>
        <input
          aria-required="true"
          id="login-email"
          type="text"
          name="email"
          value={form.email}
          onChange={onUpdateField}
        // onBlur={onBlurField}
        />
        {errors.email.dirty && errors.email.error ? (
          <p className="error">{errors.email.message}</p>
        ) : null}
      </div>
      <div className="formGroup">
        <label for="login-password">Password <span className="required">  required</span></label>
        <input
          aria-required="true"
          id="login-password"
          type="password"
          name="password"
          value={form.password}
          onChange={onUpdateField}
        // onBlur={onBlurField}
        />
        {errors.password.dirty && errors.password.error ? (
          <p className="error">
            {errors.password.message}
          </p>
        ) : null}
      </div>
      <div>
        <button type="submit">
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;