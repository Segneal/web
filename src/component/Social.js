import { Box, Flex, Image, Link } from "@chakra-ui/react";
import React from "react";
import Instagram from "../Assets/logos/Instagram.png";
import Linkedin from "../Assets/logos/Linkedin.png";
import Github from "../Assets/logos/Github.png";

export default function Social() {
  const linkedinUrl = "https://www.linkedin.com/in/anicoheredia/";
  const instagramUrl = "https://www.instagram.com/arielnicolasheredia/";
  const githubUrl = "https://github.com/Segneal";
  return (
    <Flex
      placeItems="center"
      justifyContent="center"
      position="relative"
      color="white"
      pt="3em"
    >
      <Flex
        pt="25"
        w="50%"
        borderTop="1px solid white"
        placeItems="center"
        justifyContent="center"
        mb="10"
        objectFit="cover"
      >
        <Link href={linkedinUrl} pr="5">
          <Image src={Linkedin} />
        </Link>
        <Link href={instagramUrl}>
          <Image src={Instagram} pr="5" />
        </Link>
        <Link href={githubUrl}>
          <Image src={Github} />
        </Link>
      </Flex>
    </Flex>
  );
}
