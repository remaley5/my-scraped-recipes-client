import { useState } from "react";
// import clsx from "clsx";
import { useLoginFormValidator } from "./hooks/useAuthValidators";

const LoginForm = props => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  
  const { errors, validateForm, onBlurField } = useLoginFormValidator(form);

  const onUpdateField = e => {
    const field = e.target.name;
    const nextFormState = {
      ...form,
      [field]: e.target.value,
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
      <div >
        <label>Email</label>
        <input
          type="text"
          aria-label="Email field"
          name="email"
          value={form.email}
          onChange={onUpdateField}
          onBlur={onBlurField}
        />
        {errors.email.dirty && errors.email.error ? (
          <p >{errors.email.message}</p>
        ) : null}
      </div>
      <div >
        <label>Password</label>
        <input
          type="password"
          aria-label="Password field"
          name="password"
          value={form.password}
          onChange={onUpdateField}
          onBlur={onBlurField}
        />
        {errors.password.dirty && errors.password.error ? (
          <p >
            {errors.password.message}
          </p>
        ) : null}
      </div>
      <div >
        <label>Confirm Password</label>
        <input
          type="password"
          aria-label="Confirm password field"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={onUpdateField}
          onBlur={onBlurField}
        />
        {errors.confirmPassword.dirty && errors.confirmPassword.error ? (
          <p >
            {errors.confirmPassword.message}
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