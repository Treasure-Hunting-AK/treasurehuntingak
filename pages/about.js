import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

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
  );
}
