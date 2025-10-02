'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'performance' | 'clarity';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('clarity');
  const [mounted, setMounted] = useState(false);

  // Initialize theme detection
  const initTheme = () => {
    const savedTheme = localStorage.getItem('dealerscope-theme') as Theme;
    if (savedTheme && (savedTheme === 'performance' || savedTheme === 'clarity')) {
      return savedTheme;
    }

    // Default to clarity mode (light mode)
    return 'clarity';
  };

  // Handle hydration
  useEffect(() => {
    const initialTheme = initTheme();
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
    setMounted(true);

    // System theme changes are ignored - always default to clarity mode
    // Users can manually switch themes using the theme toggle
  }, []);

  // Update theme and persist to localStorage
  const updateTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('dealerscope-theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Toggle between themes
  const toggleTheme = () => {
    updateTheme(theme === 'performance' ? 'clarity' : 'performance');
  };

  // Show a loading placeholder to prevent flash
  if (!mounted) {
    return (
      <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
        {children}
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme: updateTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};