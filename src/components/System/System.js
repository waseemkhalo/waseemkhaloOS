import './System.scss';
import w from "../../assets/icons/w-large.png";
import bluetooth from "../../assets/icons/bluetooth.svg";
import wifi from "../../assets/icons/wifi.svg";
import battery from "../../assets/icons/battery.svg";

function System() {
  // get current date function MONTH DD, YYYY
  const date = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // get current time function HH:MM AM/PM
  const time = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="system">
      <img className="system__logo" src={w} alt="waseem logo" />

      <div className="system__container">
        <div className="system__dates">
          <p className="system__today">{date}</p>
          <p className="system__time">{time}</p>
        </div>

        <div className="system__icons">
          <img src={bluetooth} alt="bluetooth" />
          <img src={wifi} alt="wifi" />
          <img src={battery} alt="battery" />
        </div>
      </div>
    </div>
  );
}

export default System;
