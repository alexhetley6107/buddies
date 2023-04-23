import { Box, Drawer, IconButton, Stack } from '@mui/material';
import { LangToggler, Navigation, ThemeToggler, UserInfo } from 'features';
import { Row } from 'shared/ui';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

export const SideMenu = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <>
      <Box display={{ xs: 'none', lg: 'block' }}>
        <Navigation />

        <Row mt={2} spacing={2}>
          <ThemeToggler />
          <LangToggler />
        </Row>
      </Box>

      <Box display={{ xs: 'block', lg: 'none' }} position="fixed" bottom={100} right={50}>
        <IconButton
          onClick={toggleMenu}
          sx={{
            color: 'info.main',
            bgcolor: 'primary.main',
            '&:hover': { color: 'info.main', bgcolor: 'primary.main' },
          }}
        >
          <MenuIcon sx={{ fontSize: '36px' }} />
        </IconButton>
      </Box>

      <Drawer
        open={open}
        onClose={toggleMenu}
        variant={'temporary'}
        anchor={'right'}
        PaperProps={{ sx: { backgroundColor: 'info.light', border: 'none', p: '10px' } }}
      >
        <Row justifyContent="center">
          <UserInfo />
        </Row>

        <Row mt={2} spacing={2}>
          <ThemeToggler />
          <LangToggler />
        </Row>

        <Navigation />

        <Stack flexGrow={1} />
        <Row justifyContent="center" mb={4}>
          <IconButton
            onClick={toggleMenu}
            sx={{
              color: 'primary.main',
              '&:hover': { color: 'primary.main' },
            }}
          >
            <CloseIcon sx={{ fontSize: '36px' }} />
          </IconButton>
        </Row>
      </Drawer>
    </>
  );
};
