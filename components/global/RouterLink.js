import { Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useRouter } from 'next/router';

const useStyles = makeStyles(() => ({
  link: {
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'none',
    },
  },
}));

export default function RouterLink({
  href,
  children,
  color,
  variant,
  underline,
}) {
  const router = useRouter();
  const styles = useStyles();

  function handleClick() {
    router.push(href);
  }
  return (
    <Link
      onClick={handleClick}
      color={color}
      variant={variant}
      underline={underline}
      component="a"
      className={styles.link}
    >
      {children}
    </Link>
  );
}
