import { Container, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  main: {
    position: 'relative',
    top: 60,
  },
}));

export default function contact() {
  const styles = useStyles();
  return (
    <Container className={styles.main}>
      <Typography variant="h4">Contact</Typography>
    </Container>
  );
}
