import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styles from './game-card.module.scss';
import { FocusableLeaf } from '@utilities/index';

const GameCard = React.memo((props: any) => {
  const { image, title, subtitle } = props.extraProps;

  return (
      <FocusableLeaf component={Card} className={styles.card} 
        {...props}>
        <CardMedia className={styles.media} image={image} />
        <CardContent className={styles.content}>
          <Typography className={styles.title} variant={'h6'}>
            {title}
          </Typography>
          <Typography className={styles.subtitle}>{subtitle}</Typography>
        </CardContent>
      </FocusableLeaf>
  );
});

export default GameCard;