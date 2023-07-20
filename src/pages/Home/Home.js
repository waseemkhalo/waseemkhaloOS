import Apps from "../../components/Apps/Apps";
import "./Home.scss";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";

function Home() {
  return (
    <>
      <Navbar />
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
