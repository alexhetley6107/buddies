import { createContext } from 'react';

interface IThemeState {
  toggleColorMode: () => void;
}

export const ColorModeContext = createContext<IThemeState>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleColorMode: () => {},
});
