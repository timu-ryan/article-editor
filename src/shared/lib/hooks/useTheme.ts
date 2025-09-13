import { useContext, useEffect } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../theme/ThemeContext";

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const {theme, setTheme} = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
  }

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [theme]);

  return { theme, toggleTheme }
}
