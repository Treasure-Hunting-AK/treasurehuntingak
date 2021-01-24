import {
  Container,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import StorefrontIcon from '@material-ui/icons/Storefront';

const useStyles = makeStyles((theme) => ({
  main: {
    position: 'relative',
    top: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& a': {
      color: theme.palette.secondary.main,
    },
  },
}));

export default function contact() {
  const styles = useStyles();
  return (
    <Container className={styles.main} maxWidth="md">
      <Typography variant="h2" gutterBottom>
        Contact Us
      </Typography>
      <Typography>We'd Love to hear from you</Typography>
      <List>
        <ListItem
          href="https://www.ebay.com/usr/treasurehuntingak"
          component="a"
          button
          className={styles.list}
        >
          <ListItemIcon>
            <StorefrontIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="eBay" />
        </ListItem>

        <Divider />

        <ListItem
          href="https://instagram.com/treasurehuntingak"
          component="a"
          button
        >
          <ListItemIcon>
            <InstagramIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Instagram" />
        </ListItem>

        <Divider />

        <ListItem
          href="https://twitter.com/treasurehuntak"
          component="a"
          button
        >
          <ListItemIcon>
            <TwitterIcon color="secondary" />
          </ListItemIcon>
          <ListItemText>Twitter</ListItemText>
        </ListItem>
      </List>
    </Container>
  );
}
