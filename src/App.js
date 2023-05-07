import ReactDOM from "react-dom/client";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CreateRecipes from "./Components/CreateRecipes";
import Layout from "./Components/Layout";
import LandingPage from "./Components/LandingPage";
import Protected from "./Components/Protected";
import { useAuthValidator } from "./Components/hooks/useAuthValidate";
import HomePage from "./Components/HomePage";

export default function App() {

  const {isLoggedIn, checkSessionAuth} = useAuthValidator();

  useEffect(() => {
    checkSessionAuth();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route
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
                <CreateRecipes/>
              </Protected>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
