import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherWidget.scss";
import icon113 from "../../assets/weather/113.png";
import icon116 from "../../assets/weather/116.png";
import icon119 from "../../assets/weather/119.png";
import icon122 from "../../assets/weather/122.png";
import icon143 from "../../assets/weather/143.png";
import icon176 from "../../assets/weather/176.png";
import icon179 from "../../assets/weather/179.png";
import icon182 from "../../assets/weather/182.png";
import icon185 from "../../assets/weather/185.png";
import icon200 from "../../assets/weather/200.png";
import icon227 from "../../assets/weather/227.png";
import icon230 from "../../assets/weather/230.png";
import icon248 from "../../assets/weather/248.png";
import icon260 from "../../assets/weather/260.png";
import icon263 from "../../assets/weather/263.png";
import icon266 from "../../assets/weather/266.png";
import icon281 from "../../assets/weather/281.png";
import icon284 from "../../assets/weather/284.png";
import icon293 from "../../assets/weather/293.png";
import icon296 from "../../assets/weather/296.png";
import icon299 from "../../assets/weather/299.png";
import icon302 from "../../assets/weather/302.png";
import icon305 from "../../assets/weather/305.png";
import icon308 from "../../assets/weather/308.png";
import icon311 from "../../assets/weather/311.png";
import icon314 from "../../assets/weather/314.png";
// import icon317 from "../../assets/weather/317.png";
// import icon320 from "../../assets/weather/320.png";
// import icon323 from "../../assets/weather/323.png";
// import icon326 from "../../assets/weather/326.png";
// import icon329 from "../../assets/weather/329.png";
// import icon332 from "../../assets/weather/332.png";
// import icon335 from "../../assets/weather/335.png";
// import icon338 from "../../assets/weather/338.png";
// import icon350 from "../../assets/weather/350.png";
// import icon353 from "../../assets/weather/353.png";
// import icon356 from "../../assets/weather/356.png";
// import icon359 from "../../assets/weather/359.png";
// import icon362 from "../../assets/weather/362.png";
// import icon365 from "../../assets/weather/365.png";
// import icon368 from "../../assets/weather/368.png";
// import icon371 from "../../assets/weather/371.png";
// import icon374 from "../../assets/weather/374.png";
// import icon377 from "../../assets/weather/377.png";
// import icon386 from "../../assets/weather/386.png";
// import icon389 from "../../assets/weather/389.png";
// import icon392 from "../../assets/weather/392.png";
// import icon395 from "../../assets/weather/395.png";

function WeatherWidget() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const apiKey = "0e5e8b4c2f6c48d2853205406232107"; // Replace with your actual API key from www.weatherapi.com

  const getWeatherData = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeatherData(null);
    }
  };

  const weatherIconsMapping = {
    1000: icon113,
    1003: icon116,
    1006: icon119,
    1009: icon122,
    1030: icon143,
    1063: icon176,
    1066: icon179,
    1069: icon182,
    1072: icon185,
    1087: icon200,
    1114: icon227,
    1117: icon230,
    1135: icon248,
    1147: icon260,
    1150: icon263,
    1153: icon266,
    1168: icon281,
    1171: icon284,
    1180: icon293,
    1183: icon296,
    1186: icon299,
    1189: icon302,
    1192: icon305,
    1195: icon308,
    1198: icon311,
    1201: icon314,
  };

  const getWeatherIcon = (conditionCode) => {
    const weatherIcon = weatherIconsMapping[conditionCode];
    return weatherIcon || null;
  };

  useEffect(() => {
    // Fetch user's geolocation
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setIsLoading(true);
          getWeatherData(latitude, longitude)
            .then(() => {
              setIsLoading(false);
            })
            .catch((error) => {
              console.error("Error getting weather data:", error);
              setWeatherData(null);
              setIsLoading(false); 
            });
        },
        (error) => {
          console.error("Error getting geolocation:", error);
          setWeatherData(null);
          setIsLoading(false); 
        }
      );
    } else {
      console.log("Geolocation is not available in this browser.");
      setWeatherData(null);
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="weather">
      {isLoading ? (
        <div className="weather--loading">
          Loading weather data, please make sure your location is enabled.
        </div>
      ) : (
        weatherData && (
          <div className="weather-info">
            <div className="weather-info__container">
              <img
                className="weather-info__icon"
                src={getWeatherIcon(weatherData.current.condition.code)}
                alt="Weather Icon"
              />
              <div className="weather-info__geo">
                <p className="weather-info__temp">
                  {weatherData.current.temp_c}°C
                </p>

                <h3 className="weather-info__location">
                  {weatherData.location.name}
                </h3>
              </div>
            </div>

            <p className="weather-info__location">
              Feels like {weatherData.current.feelslike_c}°C
            </p>
            <p className="weather-info__location">
              {weatherData.current.condition.text}
            </p>
            {/* TODO: Forecast? */}
          </div>
        )
      )}
    </div>
  );
}

export default WeatherWidget;
