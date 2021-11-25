import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 14,
    fontSizeTitle: 26,
    fontWeightTitle: 600,
    forgotButtonSize: 12,
    submitButtonSize: 16,
    button: {
      textTransform: "none",
      letterSpacing: 0,
      fontWeight: "bold"
    }
  },
  overrides: {
    MuiInput: {
      input: {
        fontWeight: "bold"
      }
    }
  },
  palette: {
    primary: { main: "#3A8DFF" },
    secondary: { main: "#B0B0B0" },
    black: "#000",
    overlayBackground: "linear-gradient(180deg, #3A8DFF 0%, #86B9FF 100%)",
    white: "#fff"
  }
});
