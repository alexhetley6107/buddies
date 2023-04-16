import { Avatar, Typography } from '@mui/material';
import { Row } from 'shared/ui';
import PersonIcon from '@mui/icons-material/Person';

export const UserInfo = () => {
  return (
    <Row>
      <Typography sx={{ mr: '10px', fontWeight: 600 }}>John Dou</Typography>
      <Avatar>
        <PersonIcon />
      </Avatar>
    </Row>
  );
};
