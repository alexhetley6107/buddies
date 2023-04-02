import React from 'react';
import { createTheme, CssBaseline, ThemeProvider as MUIThemeProvider } from '@mui/material';

export const withTheme = (component: () => React.ReactNode) => () => {
  const theme = createTheme({
    palette: {
      primary: {
        light: 'rgb(90, 147, 211)',
        main: 'rgb(36, 90, 165)',
        dark: 'rgb(10, 62, 144)',
      },
      info: {
        main: 'rgba(255, 255, 255, 1)',
        light: 'rgba(226, 226, 226, 1)',
        dark: 'rgba(122, 122, 122, 1)',
      },
      success: {
        main: 'rgba(71, 171, 72, 1)',
        light: 'rgba(222, 247, 236, 1)',
      },
      error: {
        dark: 'rgba(153, 27, 27, 1)',
        main: 'rgba(229, 84, 84, 1)',
        light: 'rgba(254, 226, 226, 1)',
      },
    },
    typography: {
      fontFamily: 'Inter',
    },
  });

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {component()}
    </MUIThemeProvider>
  );
};
