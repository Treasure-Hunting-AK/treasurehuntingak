import Head from 'next/head';
import { useState } from 'react';
import {
  AppBar,
  IconButton,
  makeStyles,
  Slide,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useRouter } from 'next/router';
import RouterLink from './global/RouterLink';
import MobileDrawer from './global/MobileDrawer';

const useStyles = makeStyles(() => ({
  title: {
    color: '#000000',
    flexGrow: 1,
  },
  appBar: {
    boxShadow: 'none',
    background: 'none',
    backgroundColor: 'white',
    border: '1px solid #dddddd',
    // boxShadow: '0 0 5px 5px #ffffff',
  },
}));

export default function Nav() {
  const router = useRouter();
  const [drawer, setDrawer] = useState();
  const styles = useStyles();

  function handleListItemPress(href) {
    if (href) {
      setDrawer(false);
      router.push(href);
    } else {
      setDrawer(false);
    }
  }

  return (
    <>
      <Head>
        <title>Treasure Hunting AK</title>
      </Head>
      <MobileDrawer drawer={drawer} handleClick={handleListItemPress} />
      <Slide in={router.pathname !== '/'}>
        <AppBar position="fixed" className={styles.appBar}>
          <Toolbar>
            <IconButton
              onClick={() => setDrawer((cur) => !cur)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <RouterLink href="/" className={styles.title}>
              <Typography variant="h5" component="h1" className={styles.title}>
                Treasure Hunting AK
              </Typography>
            </RouterLink>
          </Toolbar>
        </AppBar>
      </Slide>
    </>
  );
}
