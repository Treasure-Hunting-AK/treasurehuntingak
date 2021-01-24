import { Container, Grid, makeStyles, TextField } from '@material-ui/core';
import Head from 'next/head';
import { useState } from 'react';
import Ebay from 'ebay-node-api';
import EbayItem from '../components/shop/EbayItem';
import { API_URL } from '../config';

const useStyles = makeStyles(() => ({
  main: {
    position: 'relative',
    display: 'flex',
    top: 100,
    alignItems: 'center',
    flexDirection: 'column',
  },
  search: {
    marginBottom: 20,
  },
}));

export default function shop({ data }) {
  const styles = useStyles();
  const [results, setResults] = useState(null);
  let timeout;

  // after user stops typing for 0.5s query ebay API
  function handleSearch(str) {
    clearTimeout(timeout);
    timeout = setTimeout(async () => {
      try {
        const res = await fetch(`${API_URL}api/ebay/?q=${str}`, {
          method: 'GET',
        }).then((r) => r.json());
        setResults(res.itemSummaries);
      } catch (err) {
        console.log(err);
      }
    }, 500);
  }

  return (
    <>
      <Head>
        <>Shop</>
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
        <meta name="twitter:title" content="Shop" />
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
        <meta property="og:title" content="Shop" />
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

      <Container className={styles.main} maxWidth="lg">
        <TextField
          label="search"
          onChangeCapture={(e) => handleSearch(e.target.value)}
          className={styles.search}
          color="secondary"
        />
        <Grid container spacing={1}>
          {results === null &&
            data.map((item) => (
              <Grid item key={`data ${item.id}`} xs={12} sm={6} md={4}>
                <EbayItem item={item} />
              </Grid>
            ))}
          {results &&
            results.map((item) => (
              <Grid item key={`result ${item.id}`} xs={12} sm={6} md={4}>
                <EbayItem item={item} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  // configuration for making requests to ebay API
  const ebay = new Ebay({
    clientID: process.env.EBAY_CLIENT_ID,
    clientSecret: process.env.EBAY_SECRET_KEY,
    body: {
      grant_type: 'client_credentials',
      scope: 'https://api.ebay.com/oauth/api_scope',
    },
  });

  // generate accesstoken and then fetch initial results
  const res = await ebay.getAccessToken().then(() =>
    ebay.searchItems({
      keyword: 'vintage',
      limit: '12',
      filter: 'sellers:{treasurehuntingak}',
    })
  );

  const resJson = JSON.parse(res);

  const data = resJson.itemSummaries;

  return {
    props: { data },
    revalidate: 1,
  };
}
