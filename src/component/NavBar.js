import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const breakPoints = ["20px", "25px"];
export default function NavBar() {
  return (
    <Flex
      position="relative"
      top="0.8rem"
      left="0"
      w="100%"
      color="#636462"
      justifyContent="center"
      p="10"
    >
      <a>
        <Heading variant="fire" fontSize={breakPoints}>
          Home
        </Heading>
      </a>
      <a>
        <Heading variant="fire" fontSize={breakPoints}>
          About
        </Heading>
      </a>
      <a>
        <Heading variant="fire" fontSize={breakPoints}>
          Resume
        </Heading>
      </a>
      <a>
        <Heading variant="fire" fontSize={breakPoints}>
          Works
        </Heading>
      </a>
    </Flex>
  );
}
