import Navbar from "../../components/Navbar/Navbar";
import Apps from "../../components/Apps/Apps";
import './Home.scss'

function Home() {

    return (
        <div className="home">
            {/* <Navbar /> */}
            <div className="home__hero-container">
                <h1 className="home__heading">Waseem Khalo</h1>
                <h2 className="home__subheading">🚜</h2>
                <Apps />
            </div>
        </div>
    );
}

export default Home