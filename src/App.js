import ReactDOM from "react-dom/client";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CreateRecipes from "./Components/CreateRecipes";
import Layout from "./Components/Layout";
import LandingPage from "./Components/LandingPage";
import Protected from "./Components/Protected";
import { useAuth } from "./Components/hooks/useAuth";
import HomePage from "./Components/HomePage";

export default function App() {

  const {isLoggedIn, checkSessionAuth} = useAuth();

  useEffect(() => {
    checkSessionAuth();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout isLoggedIn={isLoggedIn}/>}> */}

          <Route index element={<LandingPage />} />
<<<<<<< HEAD
          <Route index path="home" element={<HomePage />} />
          <Route path="create" element={<CreateRecipes />} />
        
        </Route>

=======
          <HomePage path="home"/>
      
>>>>>>> dev
          {/* <Route
            path="home"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <HomePage/>
              </Protected>
            }
          />
          <Route
            path="create"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <CreateRecipes />
              </Protected>
            }
          /> */}
<<<<<<< HEAD
        {/* </Route> */}
=======
        </Route>
>>>>>>> dev
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
