import { List, Box, Badge, Button, IconButton } from '@mui/material';
import { Row, Text } from 'shared/ui';
import { NAV_ITEMS } from './constants';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';
import { LangToggler, ThemeToggler } from 'features';
import MenuIcon from '@mui/icons-material/Menu';

export const Navigation = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  return (
    <>
      <Box display={{ xs: 'none', lg: 'block' }}>
        <List sx={{ width: '230px', bgcolor: 'info.light', borderRadius: '20px', p: '10px' }}>
          {NAV_ITEMS.map(({ title, route }) => (
            <NavLink to={route} key={title}>
              <Button
                fullWidth
                sx={{
                  p: '15px 10px',
                  borderRadius: '16px',
                  transition: 'all 0.2s',
                  textTransform: 'capitalize',
                  justifyContent: 'flex-start',
                  color: pathname === route ? 'info.main' : 'black',
                  bgcolor: pathname === route ? 'primary.main' : 'transparent',
                  '&:hover': { bgcolor: 'primary.main', color: 'info.main' },
                }}
              >
                <Badge badgeContent={2} color="primary" sx={{ '& .MuiBadge-badge': { mt: '15px', right: '-18px' } }}>
                  <Text fontSize={20}>{t(title)}</Text>
                </Badge>
              </Button>
            </NavLink>
          ))}
        </List>

        <Row mt={2} spacing={2}>
          <ThemeToggler />
          <LangToggler />
        </Row>
      </Box>

      <Box display={{ xs: 'block', lg: 'none' }} position="fixed" bottom={100} right={50}>
        <IconButton
          sx={{
            color: 'info.main',
            bgcolor: 'primary.main',
            '&:hover': { color: 'info.main', bgcolor: 'primary.main' },
          }}
        >
          <MenuIcon sx={{ fontSize: '36px' }} />
        </IconButton>
      </Box>
    </>
  );
};
