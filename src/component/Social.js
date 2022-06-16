import { Box, Flex, Image, Link } from "@chakra-ui/react";
import React from "react";
import Instagram from "../Assets/logos/Instagram.png";
import Linkedin from "../Assets/logos/Linkedin.png";

export default function Social() {
  const linkedinUrl = "https://www.linkedin.com/in/anicoheredia/";
  const instagramUrl = "https://www.instagram.com/arielnicolasheredia/";
  return (
    <Flex
      placeItems="center"
      justifyContent="center"
      position="relative"
      color="white"
      pt="50"
    >
      <Flex
        w="50%"
        borderTop="1px solid white"
        placeItems="center"
        justifyContent="center"
        mb="10"
      >
        <Link href={linkedinUrl}>
          <Image src={Linkedin} />
        </Link>
        <Link href={instagramUrl}>
          <Image src={Instagram} h="48px" />
        </Link>
      </Flex>
    </Flex>
  );
}
