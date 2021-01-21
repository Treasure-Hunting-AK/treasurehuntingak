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

export default function MobileDrawer({ drawer, handleClick }) {
  return (
    <Drawer anchor="left" open={drawer} onClose={() => handleClick()}>
      <List>
        <ListItem button onClick={() => handleClick('/about')} key="about">
          <ListItemIcon>
            <EmojiEmotionsIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button onClick={() => handleClick('/contact')} key="contact">
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText primary="Contact us" />
        </ListItem>
        <ListItem button onClick={() => handleClick('/shop')} key="Shop">
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Shop" />
        </ListItem>
      </List>
    </Drawer>
  );
}
