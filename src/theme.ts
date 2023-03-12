import { createTheme } from '@mui/material/styles';
import { red, purple, green } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: purple[500]
    },
    secondary: {
      main: green[700]
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
