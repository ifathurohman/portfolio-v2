import { Moon, Sun } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';
import React from 'react';

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md hover:bg-green-500 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-light-text" />
      ) : (
        <Moon className="w-5 h-5 text-light-text" />
      )}
    </button>
  );
};

export default ThemeToggle;