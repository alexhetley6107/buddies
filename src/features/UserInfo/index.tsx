import { Avatar, Typography } from '@mui/material';
import { Row } from 'shared/ui';
import PersonIcon from '@mui/icons-material/Person';

export const UserInfo = () => {
  return (
    <Row>
      <Typography sx={{ color: 'primary.dark', mr: '15px', fontWeight: 600 }}>John Dou</Typography>
      <Avatar sx={{ bgcolor: 'primary.dark' }}>
        <PersonIcon color="info" />
      </Avatar>
    </Row>
  );
};
