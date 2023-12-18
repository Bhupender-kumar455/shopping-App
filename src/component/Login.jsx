import React, { useState } from "react";
import "./Login.css";
import login from "../assets/login.jpg";
import { Link, useNavigate } from "react-router-dom";
// import Home from "./Home";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === useremail && password === userpassword) {
      alert("login succesfull");
      navigate("/Home");
    } else {
      alert("not found");
    }
  };
  const useremail = localStorage.getItem("email")
    ? localStorage.getItem("email")
    : "admin@gmail.com";
  const userpassword = localStorage.getItem("password")
    ? localStorage.getItem("password")
    : "admin";

  return (
    <div className="fullParent" style={{ textAlign: "center" }}>
      <h1 className="header">
        Welc<span style={{ color: "#59e4a8" }}>o</span>me t
        <span style={{ color: "#59e4a8" }}>o</span> Sh
        <span style={{ color: "#59e4a8" }}>o</span>pyVerse
      </h1>
      <div className="parent">
        <div className="both">
          <div className="first" style={{ textAlign: "center" }}>
            <p>
              <Link style={{ textDecoration: "none" }} to="/Sign">
                SignUp
              </Link>{" "}
              inCase you don't have an Account
            </p>
            <form className="formParent">
              <input
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="email"
                placeholder="Your Email"
              />
              <input
                type="password"
                value={password}
                className="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Your Password"
              />
              <button type="submit" onClick={handleSubmit}>
                Login
              </button>
            </form>
          </div>
          <div className="second">
            <img src={login} alt="login logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
