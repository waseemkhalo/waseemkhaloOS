import React from "react";
import "./Hero.scss";
import pfp from "../../assets/pfp.jpg";
import icons from "../../assets/icons/Web icons.png";
import waseem from "../../assets/icons/W.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__nav">
        <img src={icons} className="hero__icons" />
        <img src={waseem} className="hero__icons--w" />
        <h5 className="hero__icons--waseem">Waseem Portfolio |</h5>
      </div>
      <div className="hero__searchbar">
        <img className="hero__searchbar--icons"/>
        <div className="hero__searchbar--search"></div>
        <img className="hero__searchbar--SSL" />
        <h6 className="hero__searchbar--url">waseemkhalo.com/</h6>
      </div>
      <img className="hero__pfp" src={pfp} />
      <h1 className="hero__heading">Waseem Khalo</h1>
      <h2 className="hero__subheading">testing 123🚜</h2>
    </div>
  )
}

export default Hero;
