import { List, Box, Badge } from '@mui/material';
import { Text } from 'shared/ui';
import { NAV_ITEMS } from './constants';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { t } = useTranslation();

  return (
    <List sx={{ width: '230px', bgcolor: 'info.light', borderRadius: '20px', p: '10px' }}>
      {NAV_ITEMS.map(({ title, route }) => (
        <NavLink to={route} key={title}>
          <Box
            p="10px"
            sx={{
              borderRadius: '16px',
              transition: 'all 0.2s',
              color: 'black',
              '&:hover': { bgcolor: 'primary.main', color: 'info.main' },
            }}
          >
            <Badge badgeContent={2} color="primary" sx={{ '& .MuiBadge-badge': { mt: '13px', right: '-18px' } }}>
              <Text fontSize={18}>{t(title)}</Text>
            </Badge>
          </Box>
        </NavLink>
      ))}
    </List>
  );
};
