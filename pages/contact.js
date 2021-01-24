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
import Head from 'next/head';

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
    <>
      <Head>
        <title>Contact</title>
        <meta
          description
          content="Welcome to Treasure Hunting AK! We are an Alaska based
          reselling shop that fully believes that one person's trash is
          another person's treasure. We're passionate about salvaging
          items, cleaning them up, and getting them into the hands of people who
          see value in them. We also love to reuse, recycle, and repurpose."
        />

        {/* twitter meta data */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact" />
        <meta name="twitter:site" content="@TreasureHuntAk" />
        <meta name="twitter:creator" content="@TreasureHuntAk" />
        <meta
          name="twitter:description"
          content="Welcome to Treasure Hunting AK! We are an Alaska based
          reselling shop that fully believes that one person's trash is
          another person's treasure. We're passionate about salvaging
          items, cleaning them up, and getting them into the hands of people who
          see value in them. We also love to reuse, recycle, and repurpose."
        />
        <meta
          name="twitter:image"
          content="https://treasurehuntingak.com/preview.jpg"
        />
        {/* end twitter meta data */}

        {/* social meta data */}
        <meta name="keywords" content="treasure hunting ak" />
        <meta
          property="og:image"
          content="https://treasurehuntingak.com/preview.jpg"
        />
        <meta property="og:title" content="Contact" />
        <meta
          property="og:description"
          content="Welcome to Treasure Hunting AK! We are an Alaska based
          reselling shop that fully believes that one person's trash is
          another person's treasure. We're passionate about salvaging
          items, cleaning them up, and getting them into the hands of people who
          see value in them. We also love to reuse, recycle, and repurpose."
        />
        <meta property="og:url" content="https://treasurehuntingak.com/" />
      </Head>
      <Container className={styles.main} maxWidth="md">
        <Typography variant="h2" gutterBottom>
          Contact Us
        </Typography>
        <Typography>We&apos;d love to hear from you</Typography>
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
    </>
  );
}
