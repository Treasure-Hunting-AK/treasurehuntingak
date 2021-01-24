/* 
  Used in index.js for rendering background photos. Reason for creating 
  component was to utilize Next.js image optomization.
*/

import { makeStyles } from '@material-ui/styles';
import Image from 'next/image';

const useStyles = makeStyles(() => ({
  image: {
    position: 'absolute',
    objectFit: 'cover',
    objectPostition: 'bottom',
    zIndex: '-2',
  },
  overlay: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: '-1',
  },
}));

export default function ImageBackground({ src }) {
  const styles = useStyles();
  return (
    <>
      <Image src={src} className={styles.image} layout="fill" priority />
      <div className={styles.overlay} />
    </>
  );
}
