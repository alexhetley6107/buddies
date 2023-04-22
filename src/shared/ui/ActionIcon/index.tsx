import { FC } from 'react';
import { Button, ButtonProps } from '@mui/material';

export const ActionIcon: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      sx={{
        borderRadius: '20px',
        bgcolor: 'info.light',
        p: '15px',
        '&:hover': { bgcolor: 'info.light' },
      }}
    >
      {children}
    </Button>
  );
};
