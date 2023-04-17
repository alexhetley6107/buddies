import { Avatar, Typography } from '@mui/material';
import { Row } from 'shared/ui';
import PersonIcon from '@mui/icons-material/Person';

export const UserInfo = () => {
  return (
    <Row>
      <Typography sx={{ mr: '15px', fontWeight: 600 }}>John Dou</Typography>
      <Avatar sx={{ bgcolor: 'white' }}>
        <PersonIcon color="primary" />
      </Avatar>
    </Row>
  );
};
