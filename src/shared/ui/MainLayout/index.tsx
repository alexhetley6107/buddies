import { Box, Stack } from '@mui/material';
import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

interface Props {
  header: ReactNode;
  navbar: ReactNode;
}

export const MainLayout: FC<Props> = ({ header, navbar }) => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
      }}
    >
      {header}
      <Stack
        alignItems="center"
        sx={{
          maxWidth: '100vw',
          height: 'calc(100vh - 55px)',
          overflow: 'auto',

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
        <Box sx={{ minHeight: '100%', width: '1000px', bgcolor: 'info.dark' }}>
          <Outlet />
        </Box>
      </Stack>
    </Box>
  );
};
