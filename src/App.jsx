import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import Navbar from "./pages/NavBar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import "./styles/utilities.css";
import "./styles/colors.css";
import "./styles/index.css";
import AppLayout from "./component/AppLayout";
import Create from "./pages/Create/create";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route index path="login" element={<Login />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="create" element={<Create />} />
        </Route>
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
