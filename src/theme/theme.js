import { createTheme } from "@mui/material/styles";

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
      main: "#222222",
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
});
export default theme;