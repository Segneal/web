import "./constants/styles.css";
import Background from "./component/Background";
import NavBar from "./component/NavBar";
import Presentation from "./component/Presentation";
import Social from "./component/Social";
import About from "./component/About";
import Tecnologies from "./component/Tecnologies";
import Career from "./component/Career";
import ToTop from "./component/ToTop";
import React from "react";

function App() {
  const about = React.useRef(null);
  const projects = React.useRef(null);
  const career = React.useRef(null);

  const divRefs = { about, career, projects };

  return (
    <div className="app">
      <section className="app-page">
        <Background />
        <NavBar ref={divRefs} />
        <Presentation />
        <Social /> <ToTop className="scroller" />
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
