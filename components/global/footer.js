import { Container, Link, makeStyles, Typography } from '@material-ui/core';
import format from 'date-fns/format';

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    bottom: 0,
    padding: 5,
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      flexDirection: 'column',
    },
    [theme.breakpoints.up('md')]: {
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
  },
}));
export default function Footer() {
  const styles = useStyles();
  return (
    <footer className={styles.footer}>
      <Typography variant="caption">
        &#169; {format(new Date(), 'yyyy')} Treasure Hunting AK All Rights
        Reserved
      </Typography>
      <Typography variant="caption">
        Designed and built by{' '}
        <Link
          href="https://freedomevenden.com/"
          color="secondary"
          variant="caption"
        >
          Freedom Evenden
        </Link>
      </Typography>
    </footer>
  );
}
