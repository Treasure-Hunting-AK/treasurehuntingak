import Head from 'next/head';
import {
  AppBar,
  makeStyles,
  Slide,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import RouterLink from './global/RouterLink';

const useStyles = makeStyles(() => {});

export default function Nav() {
  const router = useRouter();
  const styles = useStyles();

  return (
    <>
      <Head>
        <title>Treasure Hunting AK</title>
      </Head>
      <Slide in={router.pathname !== '/'}>
        <AppBar position="fixed">
          <Toolbar>
            <RouterLink href="/">
              <Typography variant="h5" component="h1" color="textPrimary">
                Treasure Hunting AK
              </Typography>
            </RouterLink>
            <nav className={styles.nav}>
              <RouterLink href="/contact" color="secondary">
                Contact
              </RouterLink>
              <RouterLink href="/" color="secondary">
                Home
              </RouterLink>
              <RouterLink href="/about" color="secondary">
                About
              </RouterLink>
              <RouterLink href="/shop" color="secondary">
                Shop
              </RouterLink>
            </nav>
          </Toolbar>
        </AppBar>
      </Slide>
    </>
  );
}
