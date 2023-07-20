import "./Navbar.scss";
import mic from "../../assets/icons/microphone.svg";
import w from '../../assets/icons/W.png'

function Navbar() {

    // get current date function MONTH DD, YYYY
    const date = new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

  return (
    <div className="navbar">
      <div className="navbar__prompt">
        <h1 className="navbar__search">
          Try “Hey Seemo, Show me your portfolio”
        </h1>
        <img className="navbar__mic" src={mic} alt="microphone img"/>
      </div>

      <div>
        <img src={w} alt="waseem logo" />
        <div>
            <h6>{date}</h6>
            <h5></h5>
        </div>
        
      </div>
    </div>
  );
}

export default Navbar;
