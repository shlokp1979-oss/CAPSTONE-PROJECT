import { useState } from "react";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";

import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {

    try {

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Signup Successful");

      navigate("/dashboard");

    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogin = async () => {

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Login Successful");

      navigate("/dashboard");

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container">

      <h2>Login / Signup</h2>

      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>
        Login
      </button>

      <button onClick={handleSignup}>
        Signup
      </button>

    </div>
  );
}

export default Login;