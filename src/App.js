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

function App() {
  return (
    <div className="app">
      <section className="app-page">
        <Background />
        <NavBar />
        <Presentation />
        <Social />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Tecnologies />
      </section>
    </div>
  );
}

export default App;
