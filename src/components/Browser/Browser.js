import React from "react";
import icons from "../../assets/icons/Web icons.png";
import waseem from "../../assets/icons/W.png";
import back from "../../assets/icons/back.svg";
import forward from "../../assets/icons/forward.svg";
import refresh from "../../assets/icons/refresh.svg";
import SSL from "../../assets/icons/lock.svg";
import './Browser.scss'
import Hero from "../Hero/Hero";

function Browser() {
  return (
    <div className="hero">
      <div className="hero__nav">
        <img src={icons} className="hero__icons" alt="icons" />
        <img src={waseem} className="hero__icons--w" alt="waseem tab icon" />
        <h5 className="hero__icons--waseem">Waseem Portfolio |</h5>
      </div>

      <div className="hero__searchbar">
        <div className="hero__searchbar-icons">
          <img src={back} className="hero__searchbar--back" alt="back button" />
          <img
            src={forward}
            className="hero__searchbar--forward"
            alt="forward button"
          />
          <img
            src={refresh}
            className="hero__searchbar--refresh"
            alt="refresh button"
          />
        </div>

        <div className="hero__searchbar-search">
          <div className="hero__searchbar-container">
            <img src={SSL} className="hero__searchbar--SSL" alt="ssl icon" />
            <h6 className="hero__searchbar--url">waseemkhalo.com/</h6>
          </div>
        </div>
      </div>

      <Hero />
    </div>
  );
}

export default Browser;
