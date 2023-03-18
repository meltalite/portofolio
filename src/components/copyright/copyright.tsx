import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import styles from './copyright.module.css'

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" className={styles['container']}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Meltalite's Portofolio
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
