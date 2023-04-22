import { Avatar, Typography } from '@mui/material';
import { Row } from 'shared/ui';
import PersonIcon from '@mui/icons-material/Person';
import { useColorMode } from 'shared/hooks/useColorMode';

export const UserInfo = () => {
  const toggle = useColorMode();
  return (
    <Row>
      <Typography sx={{ color: 'primary.dark', mr: '15px', fontWeight: 600 }}>John Dou</Typography>
      <Avatar sx={{ bgcolor: 'primary.dark' }} onClick={toggle}>
        <PersonIcon color="info" />
      </Avatar>
    </Row>
  );
};
