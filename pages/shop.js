import {
  Container,
  Link,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import Image from 'next/image';
import { useState } from 'react';

const useStyles = makeStyles(() => ({
  main: {
    position: 'relative',
    top: 60,
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
    <Container className={styles.main} maxWidth="md">
      <TextField
        label="search"
        onChangeCapture={(e) => handleSearch(e.target.value)}
      />
      {results === null &&
        data.map((item) => (
          <>
            <Image
              src={item.image.imageUrl}
              width={200}
              height={200}
              alt={item.title}
            />
            <Typography>{item.title}</Typography>
            <Link href={item.itemWebUrl}>buy me!!</Link>
          </>
        ))}
      {results &&
        results.map((item) => (
          <>
            <Image
              src={item.image.imageUrl}
              width={200}
              height={200}
              alt={item.title}
            />
            <Typography>{item.title}</Typography>
            <Link href={item.itemWebUrl}>buy me!!</Link>
          </>
        ))}
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
