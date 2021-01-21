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
import cssStyles from '../styles/nav.module.css';
import MobileDrawer from './global/MobileDrawer';

const useStyles = makeStyles(() => ({
  title: {
    color: '#ffffff',
    flexGrow: 1,
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
        <AppBar position="fixed" className={cssStyles.appBar}>
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
