import React from "react";
import "./AppComponent.css";
import { assets } from "../../assets/assets";
const AppComponent = () => {
  return (
    <div className="app_download">
      <p>
        For Better Experience Download <br /> Tomato App
      </p>
      <div className="app_download_platforms">
        <img src={assets.play_store} alt="play_store_icon" />
        <img src={assets.app_store} alt="play_store_icon" />
      </div>
    </div>
  );
};

export default AppComponent;
