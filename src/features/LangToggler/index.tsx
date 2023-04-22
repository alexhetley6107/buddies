import { ActionIcon, Text } from 'shared/ui';
import LanguageIcon from '@mui/icons-material/Language';
import { useAnchorEl } from 'shared/hooks';
import { List, ListItemButton, Popover } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { useTranslation } from 'react-i18next';

const LANGUAGES = ['en', 'ru'];

export const LangToggler = () => {
  const { isOpen, anchorEl, onOpenMenu, onCloseMenu } = useAnchorEl();
  const { i18n } = useTranslation();

  const handleItemClick = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    onCloseMenu();
  };

  return (
    <>
      <ActionIcon fullWidth onClick={onOpenMenu}>
        <LanguageIcon sx={{ fontSize: '40px', color: 'primary.main' }} />
      </ActionIcon>

      <Popover
        open={isOpen}
        anchorEl={anchorEl}
        onClose={onCloseMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
          mt: '10px',
          '& .MuiPaper-root': {
            borderRadius: '16px',
            bgcolor: 'info.light',
            width: '100px',
          },
        }}
      >
        <List sx={{ p: '6px' }}>
          {LANGUAGES.map((lang) => (
            <ListItemButton key={lang} onClick={() => handleItemClick(lang)} sx={{ borderRadius: '10px' }}>
              <Text sx={{ mr: '5px', textTransform: 'uppercase' }}>{lang}</Text>
              {lang === i18n.language && <CheckIcon sx={{ fontSize: '28px' }} />}
            </ListItemButton>
          ))}
        </List>
      </Popover>
    </>
  );
};
