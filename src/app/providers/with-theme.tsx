import React, { useState, useEffect, useMemo } from 'react';
import { createTheme, CssBaseline, ThemeProvider as MUIThemeProvider } from '@mui/material';
import { ColorModeContext } from 'shared/contexts';

export const withTheme = (component: () => React.ReactNode) => () => {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  const toggleColorMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode');
    if (savedMode === 'dark' || savedMode === 'light') {
      setMode(savedMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                primary: {
                  light: 'rgba(255, 255, 255, 1)',
                  main: 'rgb(70, 12, 114)',
                  dark: 'rgb(70, 12, 114)',
                },
                info: {
                  main: 'rgba(255, 255, 255, 1)',
                  light: 'rgba(226, 226, 246, 1)',
                  dark: 'rgba(180, 180, 180, 1)',
                },
                secondary: {
                  main: 'rgba(40, 40, 40, 1)',
                  light: 'rgba(255, 255, 255, 1)',
                  dark: 'rgba(40, 40, 40, 1)',
                },
              }
            : {
                primary: {
                  light: 'rgb(70, 12, 114)',
                  main: 'rgb(70, 12, 114)',
                  dark: 'rgba(255, 255, 255, 1)',
                },
                info: {
                  main: 'rgba(255, 255, 255, 1)',
                  light: 'rgba(180, 180, 180, 1)',
                  dark: 'rgba(226, 226, 246, 1)',
                },
                secondary: {
                  main: 'rgba(40, 40, 40, 1)',
                  light: 'rgba(40, 40, 40, 1)',
                  dark: 'rgba(255, 255, 255, 1)',
                },
              }),
        },
        typography: {
          fontFamily: 'Montserrat',
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={{ toggleColorMode }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {component()}
      </MUIThemeProvider>
    </ColorModeContext.Provider>
  );
};
