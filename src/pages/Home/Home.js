import Apps from "../../components/Apps/Apps";
import Hangar from "../../components/Hangar/Hangar";
import CalendarWidget from "../../components/CalendarWidget/CalendarWidget";
import MusicWidget from "../../components/MusicWidget/MusicWidget";
import WeatherWidget from "../../components/WeatherWidget/WeatherWidget";
import Browser from "../../components/Browser/Browser";
import "./Home.scss";


function Home() {
  return (
    <>
      <Hangar />

      <div className="home">
        <Browser />
        <div className="home__right-side">
          <CalendarWidget />
          <div className="home__right-side--bottom">
            <WeatherWidget />
            <MusicWidget />
          </div>
          <Apps />
        </div>
      </div>
    </>
  );
}

export default Home;
