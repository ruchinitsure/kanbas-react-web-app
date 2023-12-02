import React, { useState } from "react";
import * as client from "./client";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const signUp = async () => {
    try {
      const user = await client.signup({ username, password });
      navigate("/project/account");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: "400px" }}>
        <div className="card-body">
          <h1 className="card-title text-center">Sign Up</h1>

          {error && <div className="alert alert-danger">{error}</div>}

          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              value={username}
              className="form-control"
              id="username"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              value={password}
              className="form-control"
              id="password"
            />
          </div>

          <button className="btn btn-success w-100" onClick={signUp}>
            Sign Up
          </button>

          <div className="text-center mt-3">
            <Link to="/project/signin">Already have an account? Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;