import { Stack } from '@mui/material';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const CommonLayout: FC = () => {
  return (
    <Stack width="100vw" height="100vh" alignItems="center" justifyContent="center" bgcolor="red">
      <Outlet />
    </Stack>
  );
};
