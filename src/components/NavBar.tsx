import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNavbar() {
    isOpen === false ? setIsOpen(true) : setIsOpen(false);
  }
  return (
    <nav>
      <ul className={`${isOpen == true ? "active" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/schedule">Schedule</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <FaBars className="bars" onClick={toggleNavbar} />
    </nav>
  );
}

export default NavBar;
