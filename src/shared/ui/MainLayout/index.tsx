import { Box, Stack } from '@mui/material';
import { FC, ReactNode, PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

interface Props extends PropsWithChildren {
  header: ReactNode;
  navbar: ReactNode;
  aside?: ReactNode;
}

export const MainLayout: FC<Props> = ({ children, header, navbar, aside }) => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
      }}
    >
      {header}
      <Stack direction="row" width="100%" justifyContent="center" px={{ lg: '20px', xl: '100px' }}>
        <Box position="relative" width="100%">
          <Box position="absolute" top={60} left="0">
            {navbar}
          </Box>
          <Box position="absolute" top={60} right="0">
            {aside}
          </Box>
        </Box>
      </Stack>

      <Stack
        alignItems="center"
        sx={{
          px: { lg: '250px', xl: '350px' },
          maxWidth: '100vw',
          height: '100%',
          overflow: 'auto',
          bgcolor: 'secondary.main',

          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'primary.dark',
            borderRadius: '30px',
            border: '3px solid white',
          },
          '&::-webkit-scrollbar': {
            width: '15px',
            backgroundColor: 'info.main',
          },
        }}
      >
        <Box sx={{ minHeight: '100%', width: '100%' }}>{children}</Box>
      </Stack>
    </Box>
  );
};
