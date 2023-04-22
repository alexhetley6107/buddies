import { useTheme } from '@mui/material';
import { ActionIcon } from 'shared/ui';
import LanguageIcon from '@mui/icons-material/Language';

export const LangToggler = () => {
  return (
    <ActionIcon fullWidth>
      <LanguageIcon sx={{ fontSize: '40px', color: 'primary.main' }} />
    </ActionIcon>
  );
};
