import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#315b50" },
    secondary: { main: "#b7633f" },
    error: { main: "#b8403a" },
    background: { default: "#f4f5f2", paper: "#ffffff" },
  },
  typography: {
    fontFamily: '"Avenir Next", Avenir, "Segoe UI", sans-serif',
  },
  duro: {
    dialogModal: {
      backgroundColor: "#ffffff",
      backdropColor: "rgba(26, 38, 33, 0.48)",
    },
  },
});