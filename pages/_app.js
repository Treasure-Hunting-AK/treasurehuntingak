import '../styles/globals.css';
import { makeStyles, ThemeProvider } from '@material-ui/core';
import { useRouter } from 'next/router';
import theme from '../theme';
import 'fontsource-roboto';
import Nav from '../components/nav';
import Footer from '../components/global/footer';

const useStyles = makeStyles(() => ({
  pageContainer: {
    position: 'relative',
    minHeight: '100vh',
  },

  contentContainer: {
    height: 'fit-content',
    paddingBottom: '2.5rem',
  },
}));

function MyApp({ Component, pageProps }) {
  const styles = useStyles();
  const router = useRouter();
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.pageContainer}>
        <div
          className={router.pathname !== '/' ? styles.contentContainer : null}
        >
          <Nav />
          <Component {...pageProps} />
        </div>
        {router.pathname !== '/' && <Footer />}
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
