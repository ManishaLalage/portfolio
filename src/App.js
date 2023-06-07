// import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skill from "./components/Skill";
import SocialLink from "./components/SocialLink";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      {/* <About /> */}
      <Skill />
      <Project />
      <Contact />
      <SocialLink />
    </>
  );
}

export default App;
