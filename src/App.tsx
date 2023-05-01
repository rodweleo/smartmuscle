import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Plans from "./components/Plans";
import Reason from "./components/Reason";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <About />
      <Reason />
      <Plans />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
