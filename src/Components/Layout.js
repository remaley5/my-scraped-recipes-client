import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

const Layout = (isLoggedIn) => {

  const navigate = useNavigate();
  const {logoutUser} = useAuth();

  const handleLogout = () => {
//    // console.log('clicked logout');
    logoutUser();
    navigate('/');
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={!!isLoggedIn ? '/home' : '/'}>Home</Link>
          </li>
          <li>
            <Link to="/create">Recipes</Link>
          </li>
            <button onClick={handleLogout}>Log out</button>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;