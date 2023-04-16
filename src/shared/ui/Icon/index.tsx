import { Box, BoxProps } from '@mui/material';
import { FC } from 'react';

interface Props extends BoxProps {
  src: string;
}

export const Icon: FC<Props> = ({ src, ...props }) => {
  return <Box component="img" src={src} alt={src} {...props} />;
};
