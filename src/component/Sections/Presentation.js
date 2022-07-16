import { Box, Text, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import "../../constants/styles.css";
export default function Presentation() {
  return (
    <Flex
      mt="15vh"
      minW="20vw"
      position="relative"
      placeItems="center"
      justifyContent="center"
      w="90%"
      marginInline="auto"
    >
      <Box h={("300px", "200px")}>
        <Heading
          variant="whiteflame"
          as="h1"
          fontSize={["30px", "40px", "50px", "60px"]}
        >
          Hello, I Am Nicolas
        </Heading>
        <Text mt="5" color="navBarGray.100" fontSize={["15px", "20px", "25px"]}>
          I am a fullstack software developer based in Buenos Aires, Argentina.
        </Text>
      </Box>
    </Flex>
  );
}
