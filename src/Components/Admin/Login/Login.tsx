import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import PasswordGenerator from "../PasswordGenerator/PasswordGenerator";
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginAction = () => {
    if (username === "anand" && password === "raj") {
      navigate("/users");
    } else if (username === "admin" && password === "admin") {
      navigate("/admin");
    }
  };
  return (
    <>
      <div className="main-content">
        <h1>Welcome to Login Page </h1>

        <h1>User Name :</h1>
        <input
          placeholder="Enter user name !"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <h1>Password :</h1>
        <input
          placeholder=" Enter password here !"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => loginAction()}>Login</button>
      </div>
      <div className="password-generator-section">
        <PasswordGenerator />
      </div>
    </>
  );
};

export default Login;
