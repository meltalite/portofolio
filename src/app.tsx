import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import PageStructure from './page-structure';
import theme from './theme';

export default function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const currentTheme = React.useMemo(
    () =>
      {
        theme.palette.mode = prefersDarkMode ? 'dark' : 'light';
        return theme;
      },
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={currentTheme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <PageStructure />
    </ThemeProvider>
  );
}
