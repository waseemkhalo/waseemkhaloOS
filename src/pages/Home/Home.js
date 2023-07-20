import Apps from "../../components/Apps/Apps";
import "./Home.scss";
import Hero from "../../components/Hero/Hero";
import Hangar from "../../components/Hangar/Hangar";

function Home() {
  return (
    <>
      <Hangar />
      
      <div className="home">
      <Hero />  
        <div className="home__right-side">
          <Apps />
        </div>
      </div>
    </>
  );
}

export default Home;
