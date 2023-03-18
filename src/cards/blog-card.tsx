import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import styles from './blog-card.module.css';
import Typography from '@mui/material/Typography';
import { FocusableLeaf } from '../utility';
import { useNavigate } from 'react-router-dom';

export const BlogCardDemo = React.memo(function BlogCard({ onFocus, onBlur, focusIndex }: any) {
  const navigate = useNavigate();
  const extraProps = { title: 'me1' }

  function onEnterPress(props: typeof extraProps) {
    console.log('blog card enter', props)
    navigate('/project/' + props.title)
  }
  return (
    <FocusableLeaf component={Card} focusIndex={focusIndex}
     className={styles['root']} sx={{ minWidth: '400px' }}
     onEnterPress={onEnterPress} onFocus={onFocus} onBlur={onBlur} extraProps={extraProps}>
      <CardMedia
        className={styles.media}
        image={
          // 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png'
          'https://thumbor.prod.vidiocdn.com/wGR3r0xBcEVdTsPVg34kZcYOZmE=/smart/filters:strip_icc():quality(70)/vidio-web-prod-user/uploads/user/avatar/31052580/vidiooriginal-d6d38c.jpg'
          // 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
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
  );
});

export default BlogCardDemo