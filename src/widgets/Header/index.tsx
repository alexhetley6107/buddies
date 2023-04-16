import { AppBar, Stack } from '@mui/material';
import { Logo } from 'shared/ui';

export const Header = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        height: '50px',
        bgcolor: 'primary.main',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ height: '100%', width: '1000px' }}
      >
        <Logo onHead />
      </Stack>
    </AppBar>
  );
};
