import { Link } from 'react-router-dom';

function Navbar() {

    return (

        <ul>
            <Link to='/portfolio'> <li>Portfolio</li> </Link>
            <li>About</li>
            <li>Contact</li>
        </ul>
    );
  }
  
  export default Navbar;
  