import "./constants/styles.css";
import React from "react";
import Tecnologies from "./component/Sections/Tecnologies";
import Career from "./component/Sections/Career";
import About from "./component/Sections/About";
import Social from "./component/UI/Social";
import ToTop from "./component/UI/ToTop";
import Presentation from "./component/Sections/Presentation";
import NavBar from "./component/UI/NavBar";
import Background from "./component/UI/Background";

function App() {
  const about = React.useRef(null);
  const projects = React.useRef(null);
  const career = React.useRef(null);
  const home = React.useRef(null);
  const divRefs = { home, about, career, projects };

  return (
    <div className="app">
      <section ref={home} className="app-page">
        <Background />
        <NavBar ref={divRefs} />
        <Presentation />
        <Social />
        <ToTop className="scroller" />
      </section>
      <section ref={about} className="app-page">
        <About />
      </section>
      <section ref={career} className="app-page">
        <Career />
      </section>
      <section ref={projects} className="app-page fire">
        <Tecnologies />
      </section>
    </div>
  );
}

export default App;
