import { Box } from "@chakra-ui/react";
import { Route, Router, Routes } from "react-router-dom";
import "./constants/styles.css";
import Background from "./component/Background";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import Presentation from "./component/Presentation";
import Social from "./component/Social";
import About from "./component/About";
import Tecnologies from "./component/Tecnologies";
import Career from "./component/Career";
import ToTop from "./component/ToTop";

function App() {
  return (
    <div className="app">
      <section className="app-page">
        <Background />
        <NavBar />
        <Presentation />
        <Social /> <ToTop className="scroller" />
      </section>
      <section className="app-page">
        <About />
      </section>
      {/* <section className="app-page">
        <Tecnologies />
      </section>
      <section className="app-page">
        <Career />
      </section> */}
    </div>
  );
}

export default App;
