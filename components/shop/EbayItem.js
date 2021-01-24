/* Ebay Shop item component */

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';
import Image from 'next/image';

const useStyles = makeStyles(() => ({
  image: {
    position: 'fixed',
    objectFit: 'cover',
    objectPosition: 'top',
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  card: {
    position: 'relative',
    borderRadius: 0,
    border: 'none',
    transition: 'all 0.2s',
    '&:hover': {
      transform: 'scale(1.05)',
      zIndex: 2,
    },
  },

  content: {
    borderRight: '1px solid #dddddd',
    borderLeft: '1px solid #dddddd',
    borderBottom: '1px solid #dddddd',
  },
}));

export default function EbayItem({ item }) {
  const styles = useStyles();

  return (
    <Card className={styles.card} variant="outlined">
      <CardActionArea href={item.itemWebUrl} target="_blank" rel="noreferrer">
        <CardMedia
          component={() => (
            <Image
              src={item.thumbnailImages[0].imageUrl}
              className={styles.image}
              width={1000}
              height={1000}
            />
          )}
        />
        <CardContent className={styles.content}>
          <Typography variant="body2" component="h2" gutterBottom>
            {item.title}
          </Typography>

          <Box className={styles.cardFooter}>
            <Typography variant="subtitle2" color="secondary">
              Buy
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              ${item.price.value}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
