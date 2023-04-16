import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';

interface Props {
  onHead?: boolean;
}

export const Logo: FC<Props> = () => {
  return (
    <Stack direction="row" alignItems="center">
      <FaceIcon sx={{ fontSize: '38px', mb: '2px' }} />
      <Typography
        variant="h2"
        sx={{
          textTransform: 'uppercase',
          color: 'info.main',
          fontWeight: 400,
          fontSize: '36px',
          fontFamily: 'DynaPuff',
        }}
      >
        Buddies
      </Typography>
    </Stack>
  );
};
