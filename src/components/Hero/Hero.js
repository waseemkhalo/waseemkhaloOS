import React from "react";
import "./Hero.scss";
import pfp from "../../assets/pfp.jpg";
import icons from "../../assets/icons/Web icons.png";
import waseem from "../../assets/icons/W.png";
import back from "../../assets/icons/back.svg";
import forward from "../../assets/icons/forward.svg";
import refresh from "../../assets/icons/refresh.svg";
import SSL from "../../assets/icons/lock.svg";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__nav">
        <img src={icons} className="hero__icons" />
        <img src={waseem} className="hero__icons--w" />
        <h5 className="hero__icons--waseem">Waseem Portfolio |</h5>
      </div>
      <div className="hero__searchbar">
        <img src={back} className="hero__icons--back" />
        <img src={forward} className="hero__icons--forward" />
        <img src={refresh} className="hero__icons--refresh" />
        <div className="hero__searchbar--search"></div>
        <img src={SSL} className="hero__icons--SSL" />
        <h6 className="hero__searchbar--url">waseemkhalo.com/</h6>
      </div>
      <div className="hero__bio">
        <img className="hero__pfp" />
        <h1 className="hero__heading">Waseem Khalo</h1>
        <h2 className="hero__subheading">testing 123🚜</h2>
      </div>
    </div>
  );
}

export default Hero;
