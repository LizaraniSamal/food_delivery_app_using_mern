import React, { useContext } from "react";
import "./Login.css"
import { assets } from "../../assets/assets";
import { useState } from "react";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";

const Login = ({ setShowLogin }) => {
  const {url,setToken} = useContext(StoreContext);
  const [currState, setCurrState] = useState("Login");
  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  }
)
   const onChangeHandler = (e) => {
      const name = e.target.name;  // Get the input's 'name' attribute
      const value = e.target.value; // Get the value currently typed in
      setData(data => ({...data,[name]:value}))
  }
  
  const onLogin = async(e) => {
    e.preventDefault();
    let newUrl = url;
    if(currState === "Login" ){
      newUrl += "/api/user/login";
    }
    else{
      newUrl += "/api/user/register";
    }
    const response = await axios.post(newUrl,data);
    if(response.data.success){
      setToken(response.data.token);
      localStorage.setItem("token",response.data.token);
      setShowLogin(false);
    }
    else{
      alert(response.data.message);
    }
  }
  return (
    <div className="login_popup">
      <form action="" className="login_popup_container" onSubmit={onLogin}>
        <div className="login_popup_title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login_popup_input">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" name="name" onChange={onChangeHandler} value={data.name} required />
          )}
          <input type="email" name="email" onChange={onChangeHandler} value={data.email} placeholder="Your email"  required/>
          <input type="password" name="password" onChange={onChangeHandler} value={data.password} placeholder="password" required/>
        </div>
        <button type="submit">{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login_popup_condition">
          <input type="checkbox" required/>
          <p>By continuing, i agree to the terms of use and privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
