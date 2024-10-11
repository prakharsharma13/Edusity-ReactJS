import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We ensure better education for better world</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque,
          aliquam?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Facilis, cumque.
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
