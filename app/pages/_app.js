import { ThemeProvider, Box } from "@material-ui/core";
import theme from "../utils/theme";
import Header from "../components/Header";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import Footer from "../components/Footer";
import "../styles/footer_css.css";

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <Header />
        <Box mt={13.5} />
        <Component {...pageProps} />
        <Footer />
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default MyApp;
