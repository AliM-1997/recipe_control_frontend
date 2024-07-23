import React, { useState } from "react";
import Input from "../../component/Input";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../../component/Button";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nagivate = useNavigate();

  const user_submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost//recipes-control-backend/users/signup.php",
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data);
      if (res.data.status === "success") {
        nagivate("/login");
        // setIsAuth(true);
      } else {
        // setIsAuth(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" flex column center page">
      <div className="flex column signbox white-bg rounded">
        <h4 className="flex center">Signup</h4>
        <Input
          label="name"
          placeholder=" your name"
          value={name}
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Input
          label="Email"
          placeholder=" your email"
          value={email}
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          label="password"
          placeholder=" Password"
          value={password}
          type="email"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          onMouseClick={user_submit}
          color="primary-bg"
          textcolor="white-text"
        >
          signin
        </Button>
      </div>
    </div>
  );
};

export default Signup;
// label, placeholder, onChange, value, type
