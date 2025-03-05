import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const handleLogin = (e) => {
      e.preventDefault();
      alert("login successfully");
      navigate("/");
    }

  return (
    <>
      <section className="container forms">
    <div className="form login">
      <div className="form-content">
        <header>Login</header>
        <form action="#">
          <div className="field input-field">
            <input type="email" placeholder="Email" className="input"/>
          </div>
          <div className="field input-field">
            <input type="password" placeholder="Password" className="password"/>
            <i className='bx bx-hide eye-icon'></i>
          </div>
          <div className="form-link">
            <a href="#" className="forgot-pass">Forgot password?</a>
          </div>
          <div className="field button-field">
            <button className="login_btn" onClick={handleLogin}>Login</button>
          </div>
        </form>
        <div className="form-link">
          <span>Don't have an account? <a href="#" className="link signup-link" onClick={() => navigate("/signup")}>Signup</a></span>
        </div>
      </div>
      <div className="line"></div>
      <div className="media-options">
        <a href="#" className="field facebook">
          <img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png" alt="facebook" className="google-img"/>
          <span>Login with Facebook</span>
        </a>
      </div>
      <div className="media-options">
        <a href="#" className="field google">
          <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" className="google-img"/>
          <span>
            with Google</span>
        </a>
      </div>
    </div>
    
  </section>
    </>
  );
};

export default Login;
