import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const breakPoints = ["20px", "25px"];
const NavBar = React.forwardRef((props, divRefs) => {
  const { about, career, projects } = divRefs;

  const scrollToView = (section) => {
    console.log(section);
    section.current.scrollIntoView();
  };

  return (
    <header className="topNav">
      <ul>
        <li className="list-item">
          <a href="#about" onClick={() => scrollToView(about)}>
            About
          </a>
        </li>
        <li className="list-item">
          <a href="#career" onClick={() => scrollToView(career)}>
            Career
          </a>
        </li>
        <li className="list-item">
          <a href="#projects" onClick={() => scrollToView(projects)}>
            Projects
          </a>
        </li>
      </ul>
    </header>
  );
});

export default NavBar;
