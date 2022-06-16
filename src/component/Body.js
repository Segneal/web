import { Flex } from "@chakra-ui/react";
import React from "react";
import NavBar from "./NavBar";

export default function Body() {
  return (
    <Flex justifyContent="center" alignItem="center" bgColor="red">
      <NavBar />
    </Flex>
  );
}
