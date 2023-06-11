import Navbar from "../../components/Navbar/Navbar";
import Apps from "../../components/Apps/Apps";
import './Home.scss'
import Hero from "../../components/Hero/Hero";

function Home() {

    return (
        <div className="home">
            {/* <Navbar /> */}
            <div className="home">
                <Hero />
                <Apps />
            </div>
        </div>
    );
}

export default Home