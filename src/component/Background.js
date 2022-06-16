import { Box } from "@chakra-ui/react";
import React from "react";
import Body from "./Body";
import Header from "./Header";
import NavBar from "./NavBar";
import MBody from "../Assets/Images/MBody.jpg";
import "../constants/styles.css";
export default function Background() {
  return <Box className="mainbody-wrapper" h="100vh" zIndex="0"></Box>;
}
