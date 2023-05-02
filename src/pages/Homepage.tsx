import About from "../components/About";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import Plans from "../components/Plans";
import Reason from "../components/Reason";
import Staff from "../components/Staff";
import Welcome from "../components/Welcome";
function Homepage() {
  return (
    <>
      <Welcome />
      <About />
      <Reason />
      <Plans />
      <Gallery />
      <Staff />
      <Contact />
    </>
  );
}

export default Homepage;
