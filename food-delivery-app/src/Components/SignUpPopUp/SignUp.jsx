import React from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <div class="container">
        <div class="sign-up">
          <h1 class="heading">Sign Up</h1>

          <div class="text">
            <img
              src="https://i.postimg.cc/1zgS8WTF/user.png"
              alt="icon"
              height="20"
            />
            <input type="text" placeholder="Name" />
          </div>

          <div class="text">
            <img
              src="https://i.postimg.cc/DZBPRgvC/email.png"
              alt="icon"
              height="12"
            />
            <input type="email" placeholder="Email" />
          </div>

          <div class="text">
            <img
              src="https://i.postimg.cc/Nj5SDK4q/password.png"
              alt="icon"
              height="20"
            />
            <input type="password" placeholder="Password" />
          </div>

          
          <button
            type="submit"
            className="signUp_btn"
            onClick={() => alert("create account successfully")}
          >
            CREATE ACCOUNT
          </button>
          <p class="conditions">
            Already have an account?{" "}
            <a href="#" onClick={handleLogin}>
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
