import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { init, setKeyMap } from '@noriginmedia/norigin-spatial-navigation';
import AppRouter from './app';

init()
// init({ visualDebug: true })
setKeyMap({
  left: [65, 37],
  down: [83, 40],
  right: [68, 39],
  up: [87, 38],
  enter: [32, 13]
})

export default function Root() {
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  // const currentTheme = React.useMemo(
  //   () =>
  //     {
  //       theme.palette.mode = prefersDarkMode ? 'dark' : 'light';
  //       return theme;
  //     },
  //   [prefersDarkMode],
  // );

  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
        <AppRouter />
    </ThemeProvider>
  );
}
