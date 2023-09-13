import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CreateRecipes from "./Components/CreateRecipes";
import Layout from "./Components/Layout";
import HomePage from "./Components/HomePage";
import LandingPage from "./Components/LandingPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="home" element={<HomePage />} />
          <Route index element={<LandingPage />} />
          <Route path="create" element={<CreateRecipes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
