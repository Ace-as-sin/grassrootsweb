import React from "react";
import "./Navigation.scss";
import logo from "../images/GrassRootsLogo.png";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigation--icon-container"> 
        <img className="icon" src={logo} />
        <div className="text">Grass Roots Web</div>
      </div>
      <div className="phone">801-850-4977</div>
    </div>
  );
};

export default Navigation;
