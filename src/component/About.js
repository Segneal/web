import { Box, Flex, Container, Heading, Image } from "@chakra-ui/react";
import React from "react";
import Portrait from "../Assets/Images/portrait.jpg";
import "../constants/styles.css";
import { fontBreakPoints, imageBreakPoints } from "../constants/breakpoints";

//https://www.styleshout.com/templates/preview/Ceevee_2_0_0/#about

export default function About() {
  return (
    <Flex className="about-wrapper" h="100vh" bgColor="navBarGray.200">
      <div className="left-col">
        <div className="image-container">
          <img className="about-portrait" src={Portrait}></img>
        </div>
      </div>
      <div className="right-col">
        <section className="about-row">
          <div className="about-headers">About Me</div>
          <div className="about-description">
            I'm a software developer with 2 years of experience with multiple
            technologies both front and backend. keep scrolling to know about
            them
          </div>
        </section>
        <section className="about-row">
          <div className="about-headers">Contact</div>
          <div className="about-description">
            <h1>znicolasheredia@gmail.com</h1>
            <h1>(11)3603-8696</h1>
          </div>
        </section>
      </div>
    </Flex>
  );
}
