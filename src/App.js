import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
import Links from "./components/Links";

function App() {
  return (
    <div className="app  mx-32">
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
