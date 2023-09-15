
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import '../Styles/layout.css';

const Layout = (isLoggedIn) => {

  const navigate = useNavigate();
  const { logoutUser } = useAuth();

  const handleLogout = () => {
    //    // console.log('clicked logout');
    logoutUser();
    navigate('/');
  };

  return (
    <>
      <header>
        <nav>
          <ul>
            <div className="left-nav">
              <li>
                <Link to={!!isLoggedIn ? '/home' : '/'}>
                  <div className="logo">
                    <i className="half-circle" /><i className="square" /><div className="text">Flavor<div className="text">scrape</div></div>
                  </div>
                </Link>
              </li>
            </div>
            <div className="right-nav">
              <li>
                <Link to="/create">Recipes</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Log out</button>
              </li>
            </div>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="logo">
          <i className="half-circle" /><i className="square" /><div className="text">Flavor<div>scrape</div></div>
        </div>
      </footer>
    </>
  )
};

export default Layout;