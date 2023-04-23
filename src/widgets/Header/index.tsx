import { AppBar, Stack, Box } from '@mui/material';
import { UserInfo } from 'features';
import { Logo } from 'shared/ui';

export const Header = () => {
  return (
    <AppBar
      elevation={0}
      sx={{
        height: '55px',
        bgcolor: { xs: 'secondary.light', lg: 'transparent' },
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={{ xs: 'center', lg: 'space-between' }}
        sx={{ height: '100%', width: '100%', px: { lg: '20px', xl: '100px' } }}
      >
        <Logo onHead />

        <Box display={{ xs: 'none', lg: 'block' }}>
          <UserInfo />
        </Box>
      </Stack>
    </AppBar>
  );
};
