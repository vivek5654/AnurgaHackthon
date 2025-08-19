import { useState, useEffect, useMemo } from 'react';
import { ThemeContext } from './ThemeContext';

/**
 * Local storage key for theme preference
 */
const THEME_STORAGE_KEY = 'theme';

/**
 * Default theme when no preference is found
 */
const DEFAULT_THEME = 'light';

/**
 * Get theme from localStorage with error handling
 * @returns {'light' | 'dark'} Stored theme or default
 */
const getStoredTheme = () => {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
  } catch (error) {
    console.warn('Failed to read theme from localStorage:', error);
  }
  return DEFAULT_THEME;
};

/**
 * Save theme to localStorage with error handling
 * @param {'light' | 'dark'} theme - Theme to save
 */
const saveTheme = (theme) => {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (error) {
    console.warn('Failed to save theme to localStorage:', error);
  }
};

/**
 * Detect system theme preference
 * @returns {'light' | 'dark'} System theme preference
 */
const getSystemTheme = () => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return DEFAULT_THEME;
};

/**
 * ThemeProvider component that manages theme state and persistence
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element} ThemeProvider component
 */
export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(() => {
    // Initialize theme from localStorage or system preference
    const stored = getStoredTheme();
    return stored !== DEFAULT_THEME ? stored : getSystemTheme();
  });

  /**
   * Apply theme to document root
   * @param {'light' | 'dark'} theme - Theme to apply
   */
  const applyThemeToDocument = (theme) => {
    if (typeof document !== 'undefined') {
      const htmlElement = document.documentElement;
      if (theme === 'dark') {
        htmlElement.classList.add('dark');
      } else {
        htmlElement.classList.remove('dark');
      }
    }
  };

  /**
   * Set theme and persist to localStorage
   * @param {'light' | 'dark'} newTheme - Theme to set
   */
  const setTheme = (newTheme) => {
    if (newTheme === 'light' || newTheme === 'dark') {
      setThemeState(newTheme);
      saveTheme(newTheme);
      applyThemeToDocument(newTheme);
    }
  };

  /**
   * Toggle between light and dark themes
   */
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // Apply theme to document root when theme changes
  useEffect(() => {
    applyThemeToDocument(theme);
  }, [theme]);

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    theme,
    toggleTheme,
    setTheme
  }), [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};