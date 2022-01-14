import { createContext, useContext, ReactNode, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { light, dark } from '../styles/theme';

type AppContextData = {
  hasLight: boolean;
  toggleTheme: () => void;
};

type AppContextProviderProps = {
  children: ReactNode;
};

export const AppContext = createContext({} as AppContextData);

export function AppWrapper({ children }: AppContextProviderProps) {
  const [hasLight, setHasLight] = useState(false);

  function toggleTheme(): void {
    setHasLight(!hasLight);
  }

  return (
    <AppContext.Provider value={{ toggleTheme, hasLight }}>
      <ThemeProvider theme={hasLight ? light : dark}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
