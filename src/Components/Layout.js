import { Outlet, Link } from "react-router-dom";

const Layout = (isLoggedIn) => {
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
          <li>
            <button>Log out</button>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;