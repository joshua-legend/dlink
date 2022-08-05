import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from "@mui/material";
import {theme} from "../styles/theme/theme";
import BaseLayout from "../components/_layouts/baseLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider theme={theme}>
        <BaseLayout>
            <Component {...pageProps} />
        </BaseLayout>
      </ThemeProvider>
  )
}

export default MyApp
