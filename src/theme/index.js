import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Lato', sans-serif`,
    body: `'Lato', sans-serif`,
  },
  textStyles: {
    paragraph: {
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "140%",
      letterSpacing: "0.005em",
    },
  },
});

export default theme