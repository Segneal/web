import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Portrait from "../Assets/Images/portrait.jpg";

//https://www.styleshout.com/templates/preview/Ceevee_2_0_0/#about

const fontBreakPoints = ["15px", "20px", "25px"];
const marginBreakPoints = ["5px", "25px", "50px", "100px", "150px", "200px"];
const imageBreakPoints = ["150px", "300px", "400px"];
{
  /* <Box>
        <Box
          objectFit="cover"
          h="25vh"
          maxH="25vh"
          w="25vh"
          borderRadius="50%"
          bgImage={Portrait}
          bgSize="cover"
          boxShadow="0 0 13px #ccc"
        ></Box> */
}
export default function About() {
  return (
    <Box h="100vh" bgColor="navBarGray.200">
      <Flex
        pt="20vh"
        h="50vh"
        border="1px solid red"
        justifyContent="center"
        color="white"
        fontSize={["30px", "40px", "50px"]}
      >
        <Box></Box>
        <Box pl="20%">
          <Box>About Me</Box>
          <Box>Contact</Box>
        </Box>
      </Flex>
    </Box>
  );
}
