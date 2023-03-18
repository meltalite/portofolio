import * as React from 'react';
import classes from './projects.module.scss'
import { Typography } from '@mui/material';
import PROJECT_FIXTURES from './projects.fixtures';
import { FocusableParent } from '@utilities/index';
import { BlogCard } from '@cards/index';
import { useNavigate } from 'react-router-dom';

export function Projects() {
  const ref = React.useRef<HTMLElement>(null)
  const navigate = useNavigate();

  function onFocus(index: number) {
    if (!ref.current) return;
    ref.current.style.transform = `translateX(-${index * 450}px)`;
  }

  function onEnterPress(extraProps: typeof PROJECT_FIXTURES[number]) {
    navigate('project/' + extraProps.title)
  }

  return (
    <section className={classes['section-container']} >
      <Typography gutterBottom variant="h5" className={classes['section-title']} >
        Enterprise Experiences
      </Typography>
      <FocusableParent withFocus className={classes['section']} ref={ref}>
        {PROJECT_FIXTURES.map((item, index) => <BlogCard key={item.title} extraProps={item} onFocus={onFocus} onEnterPress={onEnterPress} focusIndex={index} />
        )}
      </FocusableParent>
    </section>
  );
}