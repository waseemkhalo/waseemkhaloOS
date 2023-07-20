import "./Navbar.scss"
import mic from '../../assets/icons/microphone.svg'

function Navbar() {

    return (

        <div className='navbar'>
            <h1 className="navbar__prompt">Try “Hey Blue, Open Email”</h1>
            <img src={mic}/> 
        </div>
    );
  }
  
  export default Navbar;
  