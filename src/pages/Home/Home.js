import Navbar from "../../components/Navbar/Navbar";
import './Home.scss'

function Home() {

    return (
        <div className="home">
            <Navbar />
            <h1 className="home__heading">Waseem Khalo</h1>
            <h2 className="home__subheading">🚜</h2>
        </div>
    );
}

export default Home