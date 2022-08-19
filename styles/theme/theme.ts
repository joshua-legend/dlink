import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#406080",
    },
    error: {
      main: "#ff2f93"
    },
    info: {
      main: "#000000",
    },
  },
  typography: {
    fontFamily: `'Noto Sans KR', sans-serif`
  }
});
