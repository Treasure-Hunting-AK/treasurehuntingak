import { Container, Grid, makeStyles, TextField } from '@material-ui/core';
import { useState } from 'react';
import EbayItem from '../components/shop/EbayItem';

const useStyles = makeStyles(() => ({
  main: {
    position: 'relative',
    display: 'flex',
    top: 60,
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
    console.log('yeet');
    clearTimeout(timeout);
    timeout = setTimeout(async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/ebay/?q=${str}`, {
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
      />
      <Grid container spacing={4}>
        {results === null &&
          data.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4} justify="center">
              <EbayItem item={item} />
            </Grid>
          ))}
        {results &&
          results.map((item) => <EbayItem item={item} key={item.id} />)}
      </Grid>
    </Container>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/ebay/', {
    method: 'GET',
  }).then((r) => r.json());

  const data = res.itemSummaries;

  return {
    props: { data },
    revalidate: 1,
  };
}
