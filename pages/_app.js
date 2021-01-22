import '../styles/globals.css';
import { ThemeProvider } from '@material-ui/core';
import theme from '../theme';
import 'fontsource-roboto';
import Nav from '../components/nav';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
