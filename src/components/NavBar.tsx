import { FaBars } from "react-icons/fa";
function NavBar() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>Gallery</li>
        <li>Schedule</li>
        <li>Contact</li>
      </ul>
      <FaBars className="bars" />
    </nav>
  );
}

export default NavBar;
