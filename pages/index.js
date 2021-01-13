import Head from 'next/head';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import RouterLink from '../components/global/RouterLink';

const useStyles = makeStyles(() => ({
  header: {
    width: '100%',
    backgroundImage: `url('https://picsum.photos/id/256/1920/1080')`,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 150,
    alignItems: 'center',
    minHeight: '100vh',
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
          <RouterLink href="/about">
            <div className={styles.card}>
              <h3>About</h3>
            </div>
          </RouterLink>
          <RouterLink href="/contact" variant="contained">
            <div className={styles.card}>
              <h3>Contact</h3>
            </div>
          </RouterLink>
          <RouterLink href="/shop">
            <div className={styles.card}>
              <h3>Shop</h3>
            </div>
          </RouterLink>
        </section>
        {/* </main> */}
      </Container>
    </>
  );
}
