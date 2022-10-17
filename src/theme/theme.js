import { createTheme } from "@mui/material/styles";
import { light } from "@mui/material/styles/createPalette";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3189A3",
    },
    secondary: {
      main: "#8FD38E",
    },
    danger: {
      main: "#DA4343",
    },
    grey: {
      main: "#737373",
      light: "rgba(211, 208, 195, .5)",
      contrast: "rgba(240, 240, 240, .9)",
    },
    header_primary: {
      main: "#FED74C",
    },
    header_secondary: {
      main: "#78D1B4",
    },
    white: {
      main: "#ffffff",
    },
    black: {
      main: "#393E41",
    },
  },
  typography: {
    fontFamily: "Roboto",
    h5: {
      fontSize: 22,
      fontWeight: "bold",
    },
    h2: {
      fontSize: 18,
      color: "black",
    },
  },
});
export default theme;
