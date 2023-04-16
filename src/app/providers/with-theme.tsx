import React from 'react';
import { createTheme, CssBaseline, ThemeProvider as MUIThemeProvider } from '@mui/material';

export const withTheme = (component: () => React.ReactNode) => () => {
  const theme = createTheme({
    palette: {
      primary: {
        light: 'rgba(66, 27, 111, 0.3)',
        main: 'rgb(76, 20, 155)',
        dark: 'rgb(70, 12, 114)',
      },
      info: {
        main: 'rgba(255, 255, 255, 1)',
        light: 'rgba(226, 226, 226, 1)',
        dark: 'rgba(122, 122, 122, 1)',
      },

      error: {
        dark: 'rgba(153, 27, 27, 1)',
        main: 'rgba(229, 84, 84, 1)',
        light: 'rgba(254, 226, 226, 1)',
      },
    },
    typography: {
      fontFamily: 'Montserrat',
    },
  });

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {component()}
    </MUIThemeProvider>
  );
};
