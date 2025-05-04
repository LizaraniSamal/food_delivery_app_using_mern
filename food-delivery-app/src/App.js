import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrderUserDetails/PlaceOrder";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/LoginPopup/Login";

const App = () => {
  const [showLogin,setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin}/> : <></>}
      <div className="app">
          <Navbar setShowLogin={setShowLogin}/>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/order" element={<PlaceOrder />}></Route>

          </Routes>
      </div>
      <Footer/>
    </>
  );
};

export default App;
