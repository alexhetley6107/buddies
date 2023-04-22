import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';

interface Props {
  onHead?: boolean;
}

export const Logo: FC<Props> = () => {
  return (
    <Stack direction="row" alignItems="center">
      <FaceIcon sx={{ fontSize: '38px', mb: '2px', color: 'primary.dark' }} />
      <Typography
        variant="h2"
        sx={{
          textTransform: 'uppercase',
          color: 'primary.dark',
          fontWeight: 400,
          fontSize: '40px',
          fontFamily: 'DynaPuff',
        }}
      >
        Buddies
      </Typography>
    </Stack>
  );
};
