import LoginForm from "./Auth/Login";
import SignUpForm from "./Auth/SignUp";
import '../Styles/forms.css'

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