import React from "react";
import "./Apps.scss";
import everyday from "../../assets/apps/sm-logo.png";

function Apps() {
  return (
    <div className="apps">
      <a className="apps_container" target="_blank" href="https://www.everydaytodo.com">
        <div className="apps__container">
          <img className="apps__logo" src={everyday} />
        </div>
        <h1>Everyday</h1>
      </a>
    </div>
  );
}

export default Apps;
