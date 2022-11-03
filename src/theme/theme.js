import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3189A3",
      light: "#3189A3",
      dark: "#3189A3",
      contrastText: "#FFF",
    },
    secondary: {
      main: "#8FD38E",
      light: "#8FD38E",
      dark: "#8FD38E",
      contrastText: "#FFF",
    },
    danger: {
      main: "#DA4343",
      light: "#DA4343",
      dark: "#DA4343",
      contrastText: "#FFF",
    },
    grey: {
      main: "#C6C6C6",
      light: "rgba(211, 208, 195, .5)",
      contrastText: "rgba(240, 240, 240, .9)",
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
      light: "#545454",
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
