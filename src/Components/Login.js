import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./Firebase";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate("/home");
      })
      .catch((error) => console.error(error));
  };
  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate("/home");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="login">
      <div className="container">
        <h1 className="login__title">Welcom User 😃<br/> Please login</h1>
        <label className="login__email">Email</label>
        <br />
        <input
          placeholder="Enter your mail here"
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          name="email"
        />
        <br />
        {/* <label>Password</label> */}
        <label className="login__password">Password</label>
        <br />
        <input
          placeholder="Enter your password here"
          onChange={(event) => setpassword(event.target.value)}
          type="password"
          name="password"
        />
        <br />
        <button
          className="login__signinButton btn btn-outline-info"
          onClick={signIn}
        >
          Sign-in
        </button>
        <button
          className="login__registerButton btn btn-outline-info"
          onClick={register}
        >
          Create your account
        </button>
        <p>Note: Enter password more then 6 characters <br/> And write valid email</p>
        
      </div>
    </div>
  );
}

export default Login;
