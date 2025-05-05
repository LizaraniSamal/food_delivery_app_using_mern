import React, { useContext } from "react";
import "./PlaceOrder.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";
const PlaceOrder = () => {
    const {getTotalCartAmount} = useContext(StoreContext);
    const navigate = useNavigate();

    const handleChange = () => {
      navigate("/payment");
    }
  return (
    <>    
      <form className="place_order">
        <div className="place_order_left">
          <p className="title">Delivery Information</p>
          <div className="multi_fields">
            <input type="text" placeholder="first name" required/>
            <input type="text" placeholder="last name" required/>
          </div>
          <input type="email" placeholder="Email address" required/>
          <input type="text" placeholder="Street" required/>
          <div className="multi_fields">
            <input type="text" placeholder="City" required/>
            <input type="text" placeholder="State" required/>
          </div>
          <div className="multi_fields">
            <input type="text" placeholder="Zip code" required/>
            <input type="text" placeholder="Country" required/>
          </div>
          <input type="text" placeholder="Phone" required/>
        </div>

        {/* right */}
        <div className="place_order_right">
        <div className="cart_total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart_total_details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr/>
              <div className="cart_total_details">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount() === 0? 0:10}</p>
              </div>
              <hr/>
              <div className="cart_total_details">
                <b>Total</b>
                <b>${getTotalCartAmount() === 0? 0:getTotalCartAmount()+10}</b>
              </div>
            </div>
            <button onClick={handleChange}>PROCEED TO PAYMENT</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default PlaceOrder;



