import { useState, useEffect } from 'react';
import { Theme } from '../types/theme';
import { themes } from '../config/themes';

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('cyberpunk');

  const theme = themes[currentTheme];

  const switchTheme = (newTheme: Theme) => {
    setCurrentTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.className = theme.colors.background;
  }, [theme]);

  return { currentTheme, theme, switchTheme };
};