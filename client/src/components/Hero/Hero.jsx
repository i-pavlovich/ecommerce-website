import React from "react";

import "./Hero.scss";
import HeroImg from "../../assets/hero.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
            Convallis interdum purus adipiscing dis parturient posuere ac a quam
            a eleifend montes parturient posuere curae tempor
          </p>
          <div className="buttons">
            <div className="text-button">Read More</div>
            <div className="text-button">Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={HeroImg} />
      </div>
    </div>
  );
};

export default Hero;
