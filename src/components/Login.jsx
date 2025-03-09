import React, { useState } from "react";
import '../Css/Login.css'; // Separate CSS file

const Login = ({ visible, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password, rememberMe });
  };

  return (
    <div className={`login-container ${visible ? 'slide-in' : ''}`}>
      <div className="login-box">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>Email Address *</label>
          <input
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password *</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁"}
            </span>
          </div>

          <div className="options">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember me
            </label>
            <a href="#" className="forgot-password">
              Lost your password?
            </a>
          </div>

          <div className="button-group">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="login-btn">
              Next
            </button>
          </div>
        </form>

        <p className="register-link">
          <a href="#">Don't have an account?</a>
        </p>
      </div>
    </div>
  );
};

export default Login;