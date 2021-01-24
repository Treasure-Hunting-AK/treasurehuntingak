/* Mobile drawer. Renders in nav.js */

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import EmailIcon from '@material-ui/icons/Email';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  drawer: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: '#ffffff',
  },
}));

export default function MobileDrawer({ drawer, handleClick }) {
  const styles = useStyles();
  return (
    <Drawer
      anchor="left"
      open={drawer}
      onClose={() => handleClick()}
      classes={{ paper: styles.drawer }}
    >
      <List>
        <ListItem button onClick={() => handleClick('/about')} key="about">
          <ListItemIcon>
            <EmojiEmotionsIcon color="secondary" />
          </ListItemIcon>

          <ListItemText primary="About" />
        </ListItem>

        <ListItem button onClick={() => handleClick('/contact')} key="contact">
          <ListItemIcon>
            <EmailIcon color="secondary" />
          </ListItemIcon>

          <ListItemText primary="Contact us" />
        </ListItem>

        <ListItem button onClick={() => handleClick('/shop')} key="Shop">
          <ListItemIcon>
            <ShoppingCartIcon color="secondary" />
          </ListItemIcon>

          <ListItemText primary="Shop" />
        </ListItem>
      </List>
    </Drawer>
  );
}
