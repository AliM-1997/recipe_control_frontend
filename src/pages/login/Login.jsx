import React, { useState } from "react";
import "./styles.css";
import Input from "../../component/Input";
import Button from "..//../component/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("ali123@gmail.com");
  const [password, setPassword] = useState("password");
  // const [isAuth, setIsAuth] = useState(false);

  const navigate = useNavigate();

  const user_submit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost//recipes-control-backend/users/Login.php",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data.status === "success") {
        navigate("/app");
        // setIsAuth(true);
      } else {
        // setIsAuth(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const navigate_signin = () => navigate("/app/signin");

  return (
    <div className="flex column center page">
      <div className="flex column box white-bg rounded">
        <h4 className="flex center">Login</h4>
        <Input
          label="email"
          placeholder="ali@gmail.com"
          value={email}
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          label="password"
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          onMouseClick={user_submit}
          color="primary-bg"
          textcolor="white-text"
        >
          Login
        </Button>
        <Button
          color="white-bg"
          textcolor="black-text"
          onMouseClick={navigate_signin}
        >
          Signup
        </Button>
      </div>
    </div>
  );
};
export default Login;
