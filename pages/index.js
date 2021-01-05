import Link from 'next/link';
import Head from 'next/head';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  header: {
    width: '100%',
    backgroundImage: `url('https://picsum.photos/id/256/1920/1080')`,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  container: {
    minHeight: '100vh',
  },
}));

export default function App() {
  const styles = useStyles();

  return (
    <>
      <Head>
        <title>Treasure Hunting AK</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={styles.header} disableGutters maxWidth="xl">
        <Typography variant="h3" component="h2">
          Treasure Hunting AK
        </Typography>
        <Typography
          variant="subtitle1"
          className={styles.description}
          align="center"
        >
          Discover Alaska
        </Typography>
        <section className={styles.grid}>
          <Link href="/about">
            <div className={styles.card}>
              <h3>About</h3>
            </div>
          </Link>
          <Link href="/contact">
            <div className={styles.card}>
              <h3>Contact</h3>
            </div>
          </Link>
          <Link href="/shop">
            <div className={styles.card}>
              <h3>Shop</h3>
            </div>
          </Link>
        </section>
        {/* </main> */}
      </Container>
    </>
  );
}
