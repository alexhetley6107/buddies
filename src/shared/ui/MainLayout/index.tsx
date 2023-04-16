import { Box } from '@mui/material';
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
      <Outlet />
    </Box>
  );
};
