import React from "react";
import "./styles.css";
import Input from "../../component/Input";

const Login = () => {
  return (
    <div className="flex column center page">
      <div className="flex column box white-bg rounded">
        <h4>Login</h4>
        <Input label={"email"} placeholder={"ali@gmail.com"} />
      </div>
    </div>
  );
};
export default Login;
