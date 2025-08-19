import { createContext, useContext } from 'react';

/**
 * @typedef {'light' | 'dark'} Theme
 */

/**
 * @typedef {Object} ThemeContextType
 * @property {Theme} theme - Current theme
 * @property {() => void} toggleTheme - Function to toggle between themes
 * @property {(theme: Theme) => void} setTheme - Function to set specific theme
 */

/**
 * Theme context for managing application theme state
 * @type {React.Context<ThemeContextType | undefined>}
 */
export const ThemeContext = createContext(undefined);

/**
 * Custom hook to use theme context
 * @returns {ThemeContextType} Theme context value
 * @throws {Error} When used outside of ThemeProvider
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};