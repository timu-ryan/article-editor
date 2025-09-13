import React, { FC, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '@/shared/lib/theme/ThemeContext'

const readStoredTheme = (): Theme => {
  const raw = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
  return raw === Theme.DARK || raw === Theme.LIGHT ? (raw as Theme) : Theme.LIGHT;
};

interface Props {
  children: React.ReactNode;
}

const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(readStoredTheme);

  const ctx = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={ctx}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider