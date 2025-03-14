import React, { useContext, useState } from 'react'
import "./Navbar.css"
import {assets} from "../../assets/assets";
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
const Navbar = () => {
  const [menu,setMenu] = useState("home");
  const navigate = useNavigate();
  const handleSignUP = () => {
    navigate("/login");
  }
  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <>
    <div className='navbar'>
      <Link to="/"><img src={assets.logo} alt='logo' className='logo'/></Link>
      <ul className='navbar_menu'>
        <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</li>
        <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</li>
        <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</li>
        <li onClick={() => setMenu("contact us")} className={menu === "contact us" ? "active" : ""}>contact us</li>
      </ul>
      <div className="navbar_right">
        <img src={assets.search_icon} alt='search_icon'/>
        <div className="navbar_search_icon" onClick={() => navigate("/cart")}>
          <img src={assets.basket_icon} alt='' />
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={handleSignUP}>Sign in</button>
      </div>
    </div>
    </>
  )
}

export default Navbar;