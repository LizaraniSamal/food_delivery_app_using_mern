import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const navigate = useNavigate();

  const { getTotalCartAmount,token,setToken } = useContext(StoreContext);
  const logOut = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }

  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img src={assets.logo} alt="logo" className="logo" />
        </Link>
        <ul className="navbar_menu">
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            home
          </Link>
          <a
            href="#explore_menu"
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            menu
          </a>
          <a
            href="#app_download"
            onClick={() => setMenu("mobile-app")}
            className={menu === "mobile-app" ? "active" : ""}
          >
            mobile-app
          </a>
          <a
            href="#footer"
            onClick={() => setMenu("contact us")}
            className={menu === "contact us" ? "active" : ""}
          >
            contact us
          </a>
        </ul>
        <div className="navbar_right">
          <img src={assets.search_icon} alt="search_icon" />
          <div className="navbar_search_icon" onClick={() => navigate("/cart")}>
            <img src={assets.basket_icon} alt="" />
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </div>
          {!token ? (
            <button onClick={() => setShowLogin(true)}>Sign in</button>
          ) : (
            <div className="navbar_profile">
              <img src={assets.profile_icon} alt="" />
              <ul className="nav_profile_dropdown">
                <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                <hr/>
                <li onClick={logOut}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
