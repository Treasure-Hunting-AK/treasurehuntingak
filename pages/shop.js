import { Container, Grid, makeStyles, TextField } from '@material-ui/core';
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
  );
}

export async function getStaticProps() {
  const ebay = new Ebay({
    clientID: process.env.EBAY_CLIENT_ID,
    clientSecret: process.env.EBAY_SECRET_KEY,
    body: {
      grant_type: 'client_credentials',
      scope: 'https://api.ebay.com/oauth/api_scope',
    },
  });

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
