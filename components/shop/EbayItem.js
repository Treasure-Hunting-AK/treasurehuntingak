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
}));

export default function EbayItem({ item }) {
  const styles = useStyles();

  return (
    <Card>
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
        <CardContent>
          <Typography variant="body2" component="h2" gutterBottom>
            {item.title}
          </Typography>

          <Box className={styles.cardFooter}>
            <Typography variant="subtitle2" color="textSecondary">
              {item.condition}
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
