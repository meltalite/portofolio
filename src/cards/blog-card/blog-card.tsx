import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import styles from './blog-card.module.scss';
import Typography from '@mui/material/Typography';
import { FocusableLeaf } from '../../utilities';

export const BlogCard = React.memo(function BlogCard(props: any) {
  const { image, duration, title, short } = props.extraProps;

  return (
    <FocusableLeaf component={Card} 
     className={styles['card']}
     {...props}>
      <CardMedia
        className={styles.media}
        image={
          image
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {duration}
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className={styles['short']}>
          {short}
        </Typography>
        <CardActions>
          <Button size="small" className={styles.button}>Read More</Button>
        </CardActions>
      </CardContent>
    </FocusableLeaf>
  );
});

export default BlogCard