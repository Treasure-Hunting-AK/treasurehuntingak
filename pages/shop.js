import { Container, makeStyles, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';

const useStyles = makeStyles(() => ({
  main: {
    position: 'relative',
    top: 60,
  },
}));

export default function shop() {
  const styles = useStyles();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/ebay/', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res.itemSummaries);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!data)
    return (
      <Container>
        <Typography>Loading...</Typography>
      </Container>
    );

  return (
    <Container className={styles.main} maxWidth="md">
      {data.map((item) => (
        <>
          <img src={item.image.imageUrl} width={200} height={200} />
          <Typography>{item.title}</Typography>
          <a href={item.itemWebUrl}>buy me!!</a>
        </>
      ))}
    </Container>
  );
}
