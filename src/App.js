import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

const App = () => {
  return (
    <div>
    <NavBar />
    <Home />
    <Skills />
    <Experience />
    <Project />
    <Contact />
    </div>
  );
}

export default App;
