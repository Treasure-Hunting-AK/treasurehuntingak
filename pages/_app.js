import '../styles/globals.css';
import 'fontsource-roboto';
import Nav from '../components/nav';
import CustomBackground from '../components/global/custombackground';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <CustomBackground />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
