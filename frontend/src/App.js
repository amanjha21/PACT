import "./App.css";

// Pages
import CreateEventPage from "./pages/CreateEventPage/CreateEventPage";
import SingleEventPage from "./pages/SingleEventPage/SingleEventPage";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile/Profile";

// Router
import { Routes, BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/event/:id" element={<SingleEventPage />} />
          <Route path="/createevent" element={<CreateEventPage />} />
          <Route path="/user/:id" element={<Profile />} />
          <Route path="/home/:email" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
