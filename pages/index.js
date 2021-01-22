import Head from 'next/head';
import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import RouterLink from '../components/global/RouterLink';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
  },
  header: {
    flex: 1,
    display: 'flex',
    backgroundImage: 'url("/mainbackground.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: 20,
    height: theme.breakpoints.up('sm') ? '50vh' : '',
    // color: '#fdfdfd',
  },
  link: {
    borderWidth: 2,
    borderColor: theme.palette.primary.main,
    borderStyle: 'solid',
    // padding: 20,
    height: '50vh',
    [theme.breakpoints.up('sm')]: {
      height: '50vh',
    },
    transition: 'all 0.2s',
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
      <Grid container spacing={0} className={styles.container}>
        <Grid item className={styles.header} sm={6} xs={12}>
          <Typography variant="h3" component="h2">
            Treasure Hunting AK
            <Typography
              variant="subtitle1"
              className={styles.description}
              align="center"
            >
              Discover Alaska
            </Typography>
          </Typography>
        </Grid>
        <Grid item sm={6} xs={12} className={styles.link}>
          <RouterLink href="/about">About</RouterLink>
        </Grid>
        <Grid item sm={6} xs={12} className={styles.link}>
          <RouterLink href="/contact">Contact</RouterLink>
        </Grid>
        <Grid item sm={6} xs={12} className={styles.link}>
          <RouterLink href="/shop">Shop</RouterLink>
        </Grid>
      </Grid>
    </>
  );
}
