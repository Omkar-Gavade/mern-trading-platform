import React, { useState } from "react";
import "./Signup.css";

function Signup() {
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const validateUser = () => {
    if (user.fullname.trim().length < 3) {
      alert("Full name must be at least 3 characters.");
      return false;
    }
    if (!user.email.includes("@")) {
      alert("Enter a valid email.");
      return false;
    }
    if (user.mobile.length !== 10) {
      alert("Mobile number must be 10 digits.");
      return false;
    }
    if (user.password.length < 6) {
      alert("Password must be at least 6 characters.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple (frontend-only) Authentication
    if (!validateUser()) return;

    // Save user to localStorage (simple mock authentication)
    localStorage.setItem("zerodha_user", JSON.stringify(user));

    // Redirect to Dashboard
    window.location.href = "https://api-fix.dr6xx1im5efws.amplifyapp.com/";         // Enter the dashboard deployed link
  };

  return (
    <div className="signup-page">

      <div className="signup-card">

        <div className="signup-header">
          <img src="media/images/logo.svg" alt="logo" className="signup-logo" />
          <h2>Create Your Zerodha Account</h2>
          <p>Start investing & trading in minutes.</p>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="field">
            <label>Full Name</label>
            <input
              type="text"
              name="fullname"
              placeholder="Enter full name"
              value={user.fullname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label>Mobile</label>
            <input
              type="number"
              name="mobile"
              placeholder="10 digit mobile number"
              value={user.mobile}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn-primary">
            Continue
          </button>

          <p className="signup-alt">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;