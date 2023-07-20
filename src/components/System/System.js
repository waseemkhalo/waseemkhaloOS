import "./System.scss";
import w from "../../assets/icons/w-large.png";
import bluetooth from "../../assets/icons/bluetooth.svg";
import wifi from "../../assets/icons/wifi.svg";
import battery from "../../assets/icons/battery.svg";
import { useState, useEffect } from "react";

function System() {
  //create state to hold date and time
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // useEffect hook to update date and time every second
  useEffect(() => {
    const updateDateTime = () => {
      // get current date function MONTH DD, YYYY
      const currentDate = new Date();

      const formattedDate = currentDate.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });

      // get current time function HH:MM AM/PM
      const formattedTime = currentDate.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });

      setDate(formattedDate);
      setTime(formattedTime);
    };

    // call updateDateTime function every second
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    // cleanup function to clear interval
    return () => clearInterval(interval);
  }, []);

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
