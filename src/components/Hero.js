import React from "react";
import "./Hero.scss";
import AwesomeAnimation from "./animations.js/AwesomeAnimation";
import CreativeAnimation from "./animations.js/CreativeAnimation";
import CustomAnimation from "./animations.js/CustomAnimation";

const Hero = () => {
  return (
    <div className="hero">
      <div className="overlay">
        <AwesomeAnimation />
      </div>
      <div className="overlay">
        <CreativeAnimation />
      </div>
      <div className="overlay">
        <CustomAnimation />
      </div>
    </div>
  );
};

export default Hero;
