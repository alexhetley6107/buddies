import { useTheme } from '@mui/material';
import { ActionIcon } from 'shared/ui';
import { useColorMode } from 'shared/hooks';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export const ThemeToggler = () => {
  const { palette } = useTheme();
  const toggle = useColorMode();

  return (
    <ActionIcon onClick={toggle} fullWidth>
      {palette.mode === 'light' ? (
        <LightModeIcon sx={{ fontSize: '40px', color: 'primary.main' }} />
      ) : (
        <DarkModeIcon sx={{ fontSize: '40px', color: 'primary.main' }} />
      )}
    </ActionIcon>
  );
};
