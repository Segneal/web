import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Portrait from "../Assets/Images/portrait.jpg";
import "../constants/styles.css";
import { fontBreakPoints, imageBreakPoints } from "../constants/breakpoints";

//https://www.styleshout.com/templates/preview/Ceevee_2_0_0/#about

export default function About() {
  return (
    <Box
      className="about-container"
      h="100vh"
      bgColor="navBarGray.200"
      minH="580px"
    >
      <Box className="about-wrapper" pt="50">
        <Box
          className="about-img"
          border="1px solid white"
          h={["100px", "200px"]}
          w={["100px", "200px"]}
          bgImage={Portrait}
          objectFit="cover"
        ></Box>
        <Box className="about-text" mr="auto" pl="10%">
          <Box
            className="about-description"
            fontSize={fontBreakPoints}
            pt="10vh"
          >
            <Heading as="h1">About Me</Heading>
            <Container color="white">
              Hi, I am an argentinian fullstack software developer with 2 years
              of experience coding in multiple languajes and paradigms, check
              below for them.
            </Container>
          </Box>
          <Box pt="10vh" className="about-contact" fontSize={fontBreakPoints}>
            <Heading as="h1">Contact</Heading>
            <Container>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </Container>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
