import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import Portrait from "../Assets/Images/portrait.jpg";

const fontBreakPoints = ["15px", "20px", "25px"];
const marginBreakPoints = ["5px", "25px", "50px", "100px", "150px", "200px"];
const imageBreakPoints = ["100px", "200px", "300px"];
export default function About() {
  return (
    <Box h="100vh" bgColor="navBarGray.200" minH="100vh">
      <Flex
        pt="100"
        h="90vh"
        border="1px solid red"
        justifyContent="center"
        alignContent="center"
      >
        <Box borderLeft="1px solid white">
          <Box color="white" fontSize={["40px", "30px", "20px"]}>
            About Me
          </Box>
          <Box></Box>
        </Box>
      </Flex>
    </Box>
  );
}
