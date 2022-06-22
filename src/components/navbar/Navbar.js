import './navbar.css';
import '../../App.css';

import {
  FaQuestionCircle, FaSortDown, FaListAlt, FaTools,
} from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="nav">
      <FaQuestionCircle className="icon-grey" />

      <div className="icons">
        <p className="nav--title icons mr-5">WORDLE</p>
        <FaSortDown />
      </div>

      <div className="icons">
        <FaListAlt className="mr-5 icon-grey" />
        <FaTools className="icon-grey" />
      </div>
    </nav>
  );
}

export default Navbar;
