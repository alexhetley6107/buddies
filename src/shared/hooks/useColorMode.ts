import { useContext } from 'react';
import { ColorModeContext } from 'shared/contexts';

export const useColorMode = () => {
  const { toggleColorMode } = useContext(ColorModeContext);

  return toggleColorMode;
};
