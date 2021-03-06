import Head from 'next/head';
import { Grid, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import RouterLink from '../components/global/RouterLink';
import ImageBackground from '../components/global/imageBackground';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
  },
  header: {
    position: 'relative',
    height: theme.breakpoints.up('sm') ? '50vh' : '',
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    color: '#ffffff',
  },
  overlay: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  link: {
    height: '50vh',
  },
}));

export default function App() {
  const styles = useStyles();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <>
      <Head>
        <>Treasure Hunting Ak</>
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
        <meta name="twitter:title" content="Treasure Hunting Ak" />
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
        <meta property="og:title" content="Treasure Hunting AK" />
        <meta
          property="og:description"
          content="Welcome to Treasure Hunting AK! We are an Alaska based
          reselling shop that fully believes that one person's trash is
          another person's treasure. We're passionate about salvaging
          items, cleaning them up, and getting them into the hands of people who
          see value in them. We also love to reuse, recycle, and repurpose."
        />
        <meta property="og:url" content="https://treasurehuntingak.com/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container spacing={0} className={styles.container}>
        {/* --- Title section --- */}
        <Grid item className={styles.header} sm={12} xs={12}>
          <ImageBackground src="/mainbackground.jpeg" />
          <Typography variant={smallScreen ? 'h2' : 'h1'} component="h2">
            Treasure Hunting AK
          </Typography>
          <Typography variant="subtitle1">
            Discover antique and vintage items from Alaska
          </Typography>
        </Grid>
        {/* --- End title section --- */}

        {/* --- Shop Button --- */}
        <Grid item sm={4} xs={12} className={styles.link}>
          <RouterLink
            href="/shop"
            className={styles.linkContainer}
            color="primary"
          >
            <ImageBackground src="/DF969074-7EE2-41E2-8073-00161997D7B3.jpg" />
            <Typography variant={smallScreen ? 'h4' : 'h2'}>Shop</Typography>
          </RouterLink>
        </Grid>
        {/* --- End shop button --- */}

        {/* --- Conact Button --- */}
        <Grid item sm={4} xs={12} className={styles.link}>
          <RouterLink
            href="/contact"
            className={styles.linkContainer}
            color="primary"
          >
            <ImageBackground src="/20E3EA13-B12C-4BA8-886F-7C43C25AE078.jpg" />
            <Typography variant={smallScreen ? 'h4' : 'h2'}>Contact</Typography>
          </RouterLink>
        </Grid>
        {/* --- End Contact button --- */}

        {/* --- Start About Button --- */}
        <Grid item sm={4} xs={12} className={styles.link}>
          <RouterLink
            href="/about"
            className={styles.linkContainer}
            color="primary"
          >
            <ImageBackground src="/64BE68B5-C28E-4233-9738-664DE3CB1E48.jpg" />
            <Typography variant={smallScreen ? 'h4' : 'h2'}>About</Typography>
          </RouterLink>
        </Grid>
      </Grid>
      {/* --- End About button --- */}
    </>
  );
}
