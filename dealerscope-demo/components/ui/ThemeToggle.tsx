'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 p-2 rounded-md" style={{ backgroundColor: 'var(--bg-elevated)' }}>
        <div className="w-5 h-5 bg-gray-600 rounded-full animate-pulse"></div>
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-md transition-all duration-300 hover:scale-105 group"
      style={{
        backgroundColor: 'var(--bg-elevated)',
        backdropFilter: 'var(--backdrop-blur)',
        border: '1px solid var(--border-primary)'
      }}
      title={theme === 'performance' ? 'Switch to Clarity Mode (Executive)' : 'Switch to Performance Mode (Hunter)'}
    >
      {/* Performance Mode Icon - Moon with glow effect */}
      {theme === 'performance' ? (
        <div className="relative">
          <svg
            className="w-5 h-5 transition-all duration-300"
            style={{ color: 'var(--text-primary)' }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          {/* Subtle glow effect for dark theme */}
          <div
            className="absolute inset-0 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-300"
            style={{
              background: 'var(--brand-gradient-primary)',
              filter: 'blur(8px)',
              transform: 'scale(1.2)',
              zIndex: -1
            }}
          />
        </div>
      ) : (
        /* Clarity Mode Icon - Sun */
        <svg
          className="w-5 h-5 transition-all duration-300"
          style={{ color: 'var(--brand-highlight)' }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      )}

      {/* Theme indicator text */}
      <span className="sr-only">
        {theme === 'performance' ? 'Performance Mode Theme Active' : 'Clarity Mode Theme Active'}
      </span>
    </button>
  );
};

export default ThemeToggle;