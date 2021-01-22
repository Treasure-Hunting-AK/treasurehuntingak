import Head from 'next/head';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import RouterLink from '../components/global/RouterLink';

const useStyles = makeStyles((theme) => ({
  header: {
    width: '100%',
    flex: 1,
    display: 'flex',
    backgroundImage: 'url("/mainbackground.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    flexDirection: 'column',
    paddingTop: 150,
    alignItems: 'center',
    minHeight: '100vh',
    textAlign: 'center',
    padding: 20,
    // color: '#fdfdfd',
  },
  link: {
    borderWidth: 2,
    borderColor: theme.palette.primary.main,
    borderStyle: 'solid',
    margin: 10,
    padding: 20,
    transition: 'all 0.2s',
    '&:hover': {
      transform: 'scale(1.04)',
    },
  },
  box: {
    position: 'relative',
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
            <div className={styles.link}>about</div>
          </RouterLink>
          <RouterLink href="/contact" variant="contained">
            <div className={styles.link}>Contact</div>
          </RouterLink>
          <RouterLink href="/shop">
            <div className={styles.link}>Shop</div>
          </RouterLink>
        </section>
      </Container>
    </>
  );
}
