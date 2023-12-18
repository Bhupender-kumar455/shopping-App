import React, { useState } from "react";
import "./Sign.css";
import { useNavigate } from "react-router-dom";
import login from "../assets/login.jpg";
import { Link } from "react-router-dom";

const Sign = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      alert("enter name");
    } else if (email === "") {
      alert("enter email");
    } else if (password === "") {
      alert("enter password");
    } else {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      navigate("/");
    }
  };
  return (
    <div className="fullParent" style={{ textAlign: "center" }}>
      <h1 className="header">
        Welc<span style={{ color: "#59e4a8" }}>o</span>me t
        <span style={{ color: "#59e4a8" }}>o</span> Sh
        <span style={{ color: "#59e4a8" }}>o</span>pyVerse
      </h1>
      <div className="parent">
        <div className="both">
          <div className="second">
            <img src={login} alt="login logo" />
          </div>
          <div className="first" style={{ textAlign: "center" }}>
            <p>
              <Link style={{ textDecoration: "none" }} to="/">
                Login
              </Link>{" "}
              inCase you have an Account
            </p>
            <form className="formParent">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="email"
                placeholder="Your Email"
              />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="name"
                placeholder="Your Name"
              />
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="password"
                required
                placeholder="Your Password"
              />
              <button type="submit" onClick={handleSubmit}>
                Sign-up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
