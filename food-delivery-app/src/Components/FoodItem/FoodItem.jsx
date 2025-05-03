import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import addIcon from "../../assets/add_icon_green.png";
import removeIcon from "../../assets/remove_icon_red.png";
import { StoreContext } from "../../Context/StoreContext";

const FoodItem = ({ id, name, price, image, description, category }) => {
   const {cardItems,addToCart,removeFromCart} = useContext(StoreContext);
  return (
    <div className="food_item">
      <div className="food_item_img_container">
        <img src={image} alt="food_item" className="food_item_image"/>
        {!cardItems[id] ? (
          <img
              src={assets.add_icon_white}
            alt=""
            className="add"
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className="food_item_counter">
            <img
              src={removeIcon}
              alt=""
              onClick={() => removeFromCart(id)} 
            />
            <p>{cardItems[id]}</p>
            <img
              src={addIcon}
              alt=""
              onClick={() => addToCart(id)}
            />
          </div>
        )}
      </div>
      <div className="food_item_info">
        <div className="food_item_name_rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food_item_desc">{description}</p>
        <p className="food_item_price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
