import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#d7e9ff",
      light: "#3c3c3c"
    },
    secondary: {
      main: "#406080",
      light: "#ffffff"
    },
    error: {
      main: "#ff2f93"
    },
    info: {
      main: "#6c6c6c",
    }
  },
  typography: {
    fontFamily: `'Noto Sans KR', sans-serif`
  }
});
