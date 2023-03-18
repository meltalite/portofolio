import * as React from 'react';
import classes from './skills.module.scss'
import { Typography } from '@mui/material';
import PROJECT_FIXTURES from './skills.fixtures';
import { FocusableParent, openInNewTab } from '@utilities/index';
import { GameCard } from '@cards/index';

export function Skills() {
  const ref = React.useRef<HTMLElement>(null)

  function onFocus(index: number) {
    if (!ref.current) return;
    ref.current.style.transform = `translateX(-${index * 220}px)`;
  }

  function onEnterPress(extraProps: typeof PROJECT_FIXTURES[number]) {
    openInNewTab(extraProps.url);
  }

  return (
    <section className={classes['section-container']} >
      <Typography gutterBottom variant="h5" className={classes['section-title']} >
        Skills
      </Typography>
      <FocusableParent className={classes['section']} ref={ref}>
         {PROJECT_FIXTURES.map((item, index) => <GameCard key={item.title} onEnterPress={onEnterPress} extraProps={item} onFocus={onFocus} focusIndex={index} />
        )}
      </FocusableParent>
    </section>
  );
}