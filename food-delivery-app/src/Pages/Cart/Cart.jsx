import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cardItems, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="cart">
        <div className="cart_items">
          <div className="cart_items_title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
        </div>
        <br />
        <hr />
        {food_list.map((item, i) => {
          if (cardItems[item._id] > 0) {
            return (
              <div>
                <div className="cart_items_title cart_items_item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cardItems[item._id]}</p>
                  <p>${item.price * cardItems[item._id]}</p>
                  <p className="cross" onClick={() => removeFromCart(item._id)}>
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}

        <div className="cart_bottom">
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
                <b>${getTotalCartAmount() === 0? 0 : getTotalCartAmount()+10}</b>
              </div>
            </div>
            <button onClick={() => navigate("/order")}>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart_promocode">
            <div>
              <p>If you have a promo code,Enter it here</p>
              <div className="cart_promocode_input">
                <input type="text" placeholder="promo code" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Cart;
