// import styles from '../Styles/App.css';
import LoginForm from "./Auth/Login";
import SignUpForm from "./Auth/SignUp";

function HomePage() {
  
    return (
        <div> 
            <h1>Welcome!</h1>
            <LoginForm/>
            <SignUpForm/>
        </div>
      );
    }
  
  export default HomePage;