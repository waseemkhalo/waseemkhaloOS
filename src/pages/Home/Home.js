import Apps from "../../components/Apps/Apps";
import "./Home.scss";
import Hero from "../../components/Hero/Hero";
import Hangar from "../../components/Hangar/Hangar";
import CalendarWidget from "../../components/CalendarWidget/CalendarWidget";

function Home() {
  return (
    <>
      <Hangar />
      
      <div className="home">
      <Hero />  
        <div className="home__right-side">
          <CalendarWidget />
          <Apps />
        </div>
      </div>
    </>
  );
}

export default Home;
