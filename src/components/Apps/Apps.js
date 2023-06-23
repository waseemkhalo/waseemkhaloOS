import React from "react";
import "./Apps.scss";
import everyday from "../../assets/apps/sm-logo.png";
import anbu from "../../assets/apps/anbu-logo.png";

function Apps() {
  return (
    <div className="apps">
      <a
        className="apps__link"
        target="_blank"
        href="https://www.everydaytodo.com"
        rel="noopener noreferrer"
      >
        <div className="apps__container">
          <img className="apps__logo" src={everyday} alt='everyday logo'/>
        </div>
        <h4 className="apps__header">Everyday</h4>
      </a>
      <a
        className="apps__link"
        target="_blank"
        href="https://www.everydaytodo.com"
        rel="noopener noreferrer"
      >
        <div className="apps__container">
          <img className="apps__logo" src={anbu} alt='anbu logo' />
        </div>
        <h4 className="apps__header">Anbu</h4>
      </a>
    </div>
  );
}

export default Apps;
