import logo from "../assets/Smart Muscle Documents/smart-muscle.jpeg";
import NavBar from "./NavBar";

function Header() {
  return (
    <>
      <header>
        <img className="logo" src={logo} alt="Smart Muscle" />
        <NavBar />
      </header>
      <hr />
    </>
  );
}
export default Header;
