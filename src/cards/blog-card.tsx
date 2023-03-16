import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import styles from './blog-card.module.css';
import Typography from '@mui/material/Typography';
import { FocusableLeaf, FocusableParent } from '../utility';

export const BlogCardDemo = React.memo(function BlogCard() {
  function onEnterPress() {
    console.log('blog card enter')
  }
  return (
    <FocusableParent tag='section' withFocus>
    <FocusableLeaf component={Card} 
     className={styles['root']} onEnterPress={onEnterPress}>
      <CardMedia
        className={styles.media}
        image={
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png'
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          28 MAR 2019
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
        What is Git?
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Git is a distributed version control system. Every dev has a working copy of the code and...
        </Typography>
        <CardActions>
          <Button size="small" className={styles.button}>Read More</Button>
        </CardActions>
      </CardContent>
    </FocusableLeaf>
    </FocusableParent>
  );
});

export default BlogCardDemo