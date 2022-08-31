import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Technical from "./components/Technical";
import Contact from './components/Contact';

function App() {
  return (
      <div>
        <NavBar />
        <Home />
        <About />
        <Technical />
        <Projects />
        <Contact />
        <SocialLinks />
      </div>
  );
};

export default App;
