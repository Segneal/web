import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  components: {
    Heading: {
      variants: {
        fire: {
          _hover: { color: "fire.100" },
          color: "navBarGray.100",
          mr: "15px",
          fontFamily: "Inter , Sans-Serif",
          fontWeight: "normal",
        },
        whiteflame: {
          color: "white",
          _hover: { color: "gradient(to-r,white,gray.800)" },
        },
      },
    },
  },
  colors: {
    fire: {
      100: "#D95802",
    },
    navBarGray: {
      100: "#636462",
      200: "#1E1E1E",
    },
  },
});

export default theme;
