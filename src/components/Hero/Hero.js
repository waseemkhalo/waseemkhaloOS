import React from "react";
import "./Hero.scss";

function Hero() {
  return (
    <div className="bio">
      <img className="bio__pfp" alt="w" />
      <div className="bio__who">
        <h1 className="bio__heading">Waseem Khalo</h1>
        <h2 className="bio__subheading">Software Engineer</h2>
      </div>
    </div>
  );
}

export default Hero;
