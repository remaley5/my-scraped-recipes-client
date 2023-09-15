import LoginForm from "./Auth/Login";
import SignUpForm from "./Auth/SignUp";
import '../Styles/Layout/main.css';

function LandingPage() {
  return (
    <div>
      <div className="landing">
        <h1>Welcome!</h1>
        <div className="landing-forms">
          <div className="form-container">
            <h2>Sign Up</h2>
            <SignUpForm/>
          </div>
          <div className="form-container">
            <h2>Log in</h2>
            <LoginForm/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;