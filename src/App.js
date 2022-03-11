import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
import Links from "./components/Links";
import { useEffect } from "react";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="app  mx-8 sm:mx-16 md:mx-32">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <ContactMe />
      <Links />
    </div>
  );
}

export default App;
