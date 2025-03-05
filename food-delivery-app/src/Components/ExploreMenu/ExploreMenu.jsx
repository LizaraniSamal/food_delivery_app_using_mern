import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
const ExploreMenu = ({category,setCategory}) => {
    
  return (
    <div className="explore_menu" id="explore_menu">
      <h1>Explore our menu</h1>
      <p className="explore_menu_text">
        Choose from a diverse menu featuring a delectable array of dishes
        crafted with the finest ingredients and culinary expertise. Our mission
        is to satisfy your craving and elevate your dining experience, one
        delicious meal at a time.
      </p>
      <div className="explore_menu_list" >
        {menu_list.map((item,i) => {
            return (
                <div className="explore_menu_list_item" key={i} onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}>
                    <img src={item.menu_image} alt="" className={category === item.menu_name ? "active" : ""}/>
                    <p>{item.menu_name }</p>
                </div>
            )
        })}
      </div>
      <hr/>
    </div>
  );
};

export default ExploreMenu;
