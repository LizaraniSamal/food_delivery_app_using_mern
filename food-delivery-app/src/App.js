import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrderUserDetails/PlaceOrder";
import Login from "./Components/LoginPopup/Login";
import SignUp from "./Components/SignUpPopUp/SignUp";

const App = () => {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/order" element={<PlaceOrder />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>

          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
