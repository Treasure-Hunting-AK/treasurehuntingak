import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Head from 'next/head';

const useStyles = makeStyles(() => ({
  main: {
    marginTop: 100,
    '& p': {
      marginBottom: 50,
    },
  },
}));

export default function About() {
  const styles = useStyles();
  return (
    <>
      <Head>
        <title>About</title>
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
        <meta name="twitter:title" content="About us" />
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
          content="https://treasurehuntingak.com/preview.png"
        />
        {/* end twitter meta data */}

        {/* social meta data */}
        <meta name="keywords" content="treasure hunting ak" />
        <meta
          property="og:image"
          content="https://treasurehuntingak.com/preview.png"
        />
        <meta property="og:title" content="About us" />
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

      <Container maxWidth="sm" className={styles.main}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          About Us
        </Typography>
        <Typography variant="body1" gutterBottom>
          Hello and welcome to Treasure Hunting AK! We are an Alaska based
          reselling shop that fully believes that one person&apos;s trash is
          another person&apos;s treasure. We&apos;re passionate about salvaging
          items, cleaning them up, and getting them into the hands of people who
          see value in them. We also love to reuse, recycle, and repurpose.
        </Typography>

        <Typography variant="body1" gutterBottom>
          We are always on the hunt so head over to our eBay shop and see what
          treasures we&apos;ve found!
        </Typography>
      </Container>
    </>
  );
}
