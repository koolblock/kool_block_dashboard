import { ThemeProvider } from "@material-ui/core";
import theme from "../utils/theme";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Header
        title="KoolBlock"
        sections={[{ title: "Our Work", url: "/about_us" }]}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
