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
        <div className="login-section">
          <div>
            <h3>Welcome to Login Page </h3>
          </div>
          <hr />
          <div className="username_section">
            <label>User Name :</label>
            <input
              placeholder="Enter user name !"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="password_section">
            <label>Password :</label>
            <input
              placeholder=" Enter password here !"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button onClick={() => loginAction()}>Login</button>
          </div>
        </div>
      </div>
      <div className="password-generator-section">
        <PasswordGenerator />
      </div>
    </>
  );
};

export default Login;
