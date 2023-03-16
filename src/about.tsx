import * as React from 'react';
import Avatar from "@mui/material/Avatar";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FocusableLeaf, FocusableParent } from './utility';
import classes from './app.module.css'
import BlogCardDemo from './cards/blog-card';

const animals = ['Lizard', 'Lion', 'Tiger', 'Whale', 'Dolphin', 'Bee']
export default function MediaCard() {
  function onEnterPress(index: number) {
    console.log('entering media card', index)
  }
  return (
    <FocusableParent tag='section' withFocus className={classes['section']}>
      {animals.map((animal, index) => <FocusableLeaf key={animal} component={Card} sx={{ maxWidth: 500 }} onEnterPress={() => onEnterPress(index)} >
      <CardMedia
        sx={{ height: 140 }}
        component='img'
        image="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRDiAJs9euYV1-6JlnH9o-lL01D3rpduCiQuqaJkZ9BqQr0iVwX2OXOKQJykm-o7qvWcTmDiFkdFNiElZQ"
        title={animal}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {animal}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="secondary">Read More</Button>
      </CardActions>
    </FocusableLeaf>
 )}
    </FocusableParent>
  );
}

export function About() {
  return <BlogCardDemo />
  return <MediaCard />
  return <Avatar src='https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg' alt='Mufti Muflihun'>MM</Avatar>
}