import React from 'react';
import { motion } from 'framer-motion';
import { Palette } from 'lucide-react';
import { Theme } from '../types/theme';
import { themes } from '../config/themes';

interface ThemeSwitcherProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
  theme: any;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ currentTheme, onThemeChange, theme }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed top-4 right-4 z-50">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-3 rounded-full ${theme.colors.surface} backdrop-blur-md shadow-lg ${theme.colors.text}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Switch theme"
      >
        <Palette size={20} />
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`absolute top-16 right-0 ${theme.colors.surface} backdrop-blur-md rounded-lg shadow-lg p-4 min-w-48`}
        >
          <h3 className={`text-sm font-semibold mb-3 ${theme.colors.text}`}>Choose Theme</h3>
          {Object.entries(themes).map(([key, themeConfig]) => (
            <button
              key={key}
              onClick={() => {
                onThemeChange(key as Theme);
                setIsOpen(false);
              }}
              className={`w-full text-left p-2 rounded text-sm transition-colors ${
                currentTheme === key
                  ? `bg-gradient-to-r ${themeConfig.colors.primary} text-white`
                  : `${theme.colors.text} hover:bg-gray-700/50`
              }`}
            >
              {themeConfig.name}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default ThemeSwitcher;