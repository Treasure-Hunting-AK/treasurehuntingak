import Head from 'next/head';
import { useState } from 'react';
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Slide,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import EmailIcon from '@material-ui/icons/Email';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useRouter } from 'next/router';
import RouterLink from './global/RouterLink';

const useStyles = makeStyles(() => ({
  title: {
    color: '#ffffff',
    flexGrow: 1,
  },
}));

export default function Nav() {
  const router = useRouter();
  const styles = useStyles();
  const [drawer, setDrawer] = useState();

  function handleListItemPress(href) {
    setDrawer(false);
    router.push(href);
  }

  return (
    <>
      <Head>
        <title>Treasure Hunting AK</title>
      </Head>
      <Drawer anchor="left" open={drawer} onClose={() => setDrawer(false)}>
        <List>
          <ListItem
            button
            onClick={() => handleListItemPress('/about')}
            key="about"
          >
            <ListItemIcon>
              <EmojiEmotionsIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem
            button
            onClick={() => handleListItemPress('/contact')}
            key="contact"
          >
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="Contact us" />
          </ListItem>
          <ListItem
            button
            onClick={() => handleListItemPress('/shop')}
            key="Shop"
          >
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Shop" />
          </ListItem>
        </List>
      </Drawer>
      <Slide in={router.pathname !== '/'}>
        <AppBar position="fixed">
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
