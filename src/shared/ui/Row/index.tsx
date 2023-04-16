import { FC } from 'react';
import { Stack, StackProps } from '@mui/material';

export const Row: FC<StackProps> = ({ children, direction, alignItems, ...props }) => {
  return (
    <Stack direction={direction ?? 'row'} alignItems={alignItems ?? 'center'} {...props}>
      {children}
    </Stack>
  );
};
