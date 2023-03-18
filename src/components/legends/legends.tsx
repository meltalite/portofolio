import * as React from 'react';
import Typography from '@mui/material/Typography';
import styles from './legends.module.css'

export default function Legends() {
  return (
    <Typography variant="body2" color="text.secondary" className={styles['container']}>
      Use arrow keys or WASD and Enter or Space to navigate. <br/>
      Esc or Shift to back.
    </Typography>
  );
}
