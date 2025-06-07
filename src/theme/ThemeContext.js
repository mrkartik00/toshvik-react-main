import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const defaultTheme = {
  primaryColor: '#4CAF50', // Default Green
  secondaryColor: '#FFC107', // Default Amber
  fontFamily: "'Roboto', sans-serif",
};

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(() => {
    const savedTheme = localStorage.getItem('toshvikTheme');
    return savedTheme ? JSON.parse(savedTheme) : defaultTheme;
  });

  const applyThemeToDocument = useCallback((currentTheme) => {
    document.documentElement.style.setProperty('--primary-color', currentTheme.primaryColor);
    document.documentElement.style.setProperty('--secondary-color', currentTheme.secondaryColor);
    document.documentElement.style.setProperty('--font-family', currentTheme.fontFamily);
  }, []);


  useEffect(() => {
    applyThemeToDocument(theme);
  }, [theme, applyThemeToDocument]);

  const setTheme = (newThemeOptions) => {
    const updatedTheme = { ...theme, ...newThemeOptions };
    setThemeState(updatedTheme);
    localStorage.setItem('toshvikTheme', JSON.stringify(updatedTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, defaultTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
