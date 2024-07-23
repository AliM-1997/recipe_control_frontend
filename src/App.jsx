import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./pages/NavBar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import "./styles/utilities.css";
import "./styles/colors.css";
import "./styles/index.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="*"
          element={
            <div>
              <h1>Page not found</h1>
              <Link to="/">↼ back</Link>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
