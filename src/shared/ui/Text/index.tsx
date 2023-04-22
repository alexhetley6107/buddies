import { FC } from 'react';
import { Typography, TypographyProps } from '@mui/material';

export const Text: FC<TypographyProps> = ({ children, ...props }) => {
  return (
    <Typography fontWeight={600} {...props}>
      {children}
    </Typography>
  );
};
