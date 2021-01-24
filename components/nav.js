/* Renders top bar and mobile drawer */

import Head from 'next/head';
import { useState } from 'react';
import {
  AppBar,
  Button,
  Hidden,
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

const useStyles = makeStyles((theme) => ({
  title: {
    color: '#000000',
    flexGrow: 2,
    textTransform: 'none',
  },
  appBar: {
    boxShadow: 'none',
    background: 'none',
    backgroundColor: 'white',
    border: '1px solid #dddddd',
    '& button': {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      flexGrow: 1,
    },
  },
}));

export default function Nav() {
  const router = useRouter();
  const [drawer, setDrawer] = useState();
  const styles = useStyles();

  // shows/hides drawer
  function handleListItemPress(href) {
    if (href) {
      setDrawer(false);
      router.push(href);
    } else {
      setDrawer(false);
    }
  }

  // pushes to specified route
  function handleButtonPress(href) {
    router.push(href);
  }

  return (
    <>
      <Head>
        <title>Treasure Hunting AK</title>
      </Head>

      <Hidden smUp>
        <MobileDrawer drawer={drawer} handleClick={handleListItemPress} />
      </Hidden>

      <Slide in={router.pathname !== '/'}>
        <AppBar position="fixed" className={styles.appBar}>
          <Toolbar>
            {/* --- Mobile menu button --- */}
            <Hidden smUp>
              <IconButton
                onClick={() => setDrawer((cur) => !cur)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            {/* --- end mobile menu button --- */}

            {/* --- Title Link --- */}
            <RouterLink href="/" className={styles.title}>
              <Typography variant="h5" component="h1" className={styles.title}>
                Treasure Hunting AK
              </Typography>
            </RouterLink>
            {/* --- End title link --- */}

            {/* --- Main Nav --- */}
            <Hidden xsDown>
              <Button
                onClick={() => handleButtonPress('/shop')}
                variant="outlined"
                color="secondary"
              >
                Shop
              </Button>

              <Button
                onClick={() => handleButtonPress('/contact')}
                variant="outlined"
                color="secondary"
              >
                Contact
              </Button>

              <Button
                onClick={() => handleButtonPress('/about')}
                variant="outlined"
                color="secondary"
              >
                About
              </Button>
            </Hidden>
            {/* --- End main nav --- */}
          </Toolbar>
        </AppBar>
      </Slide>
    </>
  );
}
