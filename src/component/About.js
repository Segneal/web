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
          <h1>About Me</h1>
          <p>
            I'm a 30's years old software developer with 2 years of experience
            in multiple technologies both front and backend. keep scrolling to
            know about them
          </p>
        </section>
        <section className="about-row">
          <h1>Contact Details</h1>
          <div className="contact-container">
            <div className="contact-details">
              <h2>znicolasheredia@gmail.com</h2>
              <h2>(11)3603-8696</h2>
            </div>
          </div>
        </section>
      </div>
    </Flex>
  );
}
