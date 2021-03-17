import { ThemeProvider, Box } from "@material-ui/core";
import theme from "../utils/theme";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Box mt={13} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
