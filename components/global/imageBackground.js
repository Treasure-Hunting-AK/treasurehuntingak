import { makeStyles } from '@material-ui/styles';
import Image from 'next/image';

const useStyles = makeStyles(() => ({
  image: {
    position: 'absolute',
    objectFit: 'cover',
    objectPostition: 'bottom',
    zIndex: '-1',
  },
}));

export default function ImageBackground({ src }) {
  const styles = useStyles();
  return <Image src={src} className={styles.image} layout="fill" priority />;
}
