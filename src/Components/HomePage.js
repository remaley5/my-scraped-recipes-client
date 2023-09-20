// import styles from '../Styles/App.css';
import { Link } from "react-router-dom";

function HomePage() {
  
    return (
        <div> 
            <h1>Hi, Babe!</h1>
            <Link to="/create">Look up a recipe!</Link>
        </div>
      );
    }
  
  export default HomePage;