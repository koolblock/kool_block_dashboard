import { ThemeProvider, Box } from "@material-ui/core";
import theme from "../utils/theme";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/footer_css.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Box mt={13} />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
