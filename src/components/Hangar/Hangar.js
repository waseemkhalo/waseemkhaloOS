import "./Hangar.scss";
import mic from "../../assets/icons/microphone.svg";
import System from "../System/System";

function Navbar() {


  return (
    <div className="navbar">
      <div className="navbar__prompt">
        <h1 className="navbar__search">
          Try “Hey Seemo, Show me your portfolio”
        </h1>
        <img className="navbar__mic" src={mic} alt="microphone img" />
      </div>

      <System />
    </div>
  );
}

export default Navbar;
