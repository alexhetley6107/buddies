import { AppBar, Stack, Box } from '@mui/material';
import { UserInfo } from 'features';
import { Logo } from 'shared/ui';

export const Header = () => {
  return (
    <AppBar
      // position="static"
      elevation={0}
      sx={{
        height: '55px',
        bgcolor: 'transparent',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ height: '100%', width: '100%', px: { lg: '20px', xl: '100px' } }}
      >
        <Logo onHead />
        <UserInfo />
      </Stack>
    </AppBar>
  );
};
