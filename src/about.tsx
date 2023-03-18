import * as React from 'react';
import { FocusableParent } from './utility';
import classes from './app.module.css'
import BlogCardDemo from './cards/blog-card';
import { Typography } from '@mui/material';

const animals = [
  { name: 'Lizard',  image: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRDiAJs9euYV1-6JlnH9o-lL01D3rpduCiQuqaJkZ9BqQr0iVwX2OXOKQJykm-o7qvWcTmDiFkdFNiElZQ"},
  { name: 'Lion',  image: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRDiAJs9euYV1-6JlnH9o-lL01D3rpduCiQuqaJkZ9BqQr0iVwX2OXOKQJykm-o7qvWcTmDiFkdFNiElZQ"},
  { name: 'Tiger',  image: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRDiAJs9euYV1-6JlnH9o-lL01D3rpduCiQuqaJkZ9BqQr0iVwX2OXOKQJykm-o7qvWcTmDiFkdFNiElZQ"},
  { name: 'Whale',  image: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRDiAJs9euYV1-6JlnH9o-lL01D3rpduCiQuqaJkZ9BqQr0iVwX2OXOKQJykm-o7qvWcTmDiFkdFNiElZQ"},
  // { name: 'Dolphin',  image: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRDiAJs9euYV1-6JlnH9o-lL01D3rpduCiQuqaJkZ9BqQr0iVwX2OXOKQJykm-o7qvWcTmDiFkdFNiElZQ"},
  // { name: 'Bee',  image: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRDiAJs9euYV1-6JlnH9o-lL01D3rpduCiQuqaJkZ9BqQr0iVwX2OXOKQJykm-o7qvWcTmDiFkdFNiElZQ"},
]

export function About() {
  const ref = React.useRef<HTMLElement>(null)

  function onFocus(index: number) {
    console.log('focus on me', index,ref)
    if (!ref.current) return;
    ref.current.style.transform = `translateX(-${index * 500}px)`;
  }

  return (
    <section className={classes['section-container']} >
      <Typography gutterBottom variant="h5" className={classes['section-title']} >
        My Experiences
      </Typography>
      <FocusableParent tag='ul' withFocus className={classes['section']} ref={ref}>
        {animals.map(({ name, image }, index) => <BlogCardDemo key={name} title={name} image={image} subtitle={name} short={name} onFocus={onFocus} focusIndex={index} />
        )}
      </FocusableParent>
    </section>
  );
}