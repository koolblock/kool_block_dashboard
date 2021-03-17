import { ThemeProvider, Box } from "@material-ui/core";
import theme from "../utils/theme";
import Header from "../components/Header";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <Header />
        <Box mt={13} />
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default MyApp;
