import React, { createContext, useState, useContext } from 'react';

const themes = {
    light: {
      primary: '#FFFFFF',
      secondary: '#103183',
      background: '#FFCC01',
      text: '#000000',
    },
    dark: {
      primary: '#103183',
      secondary: '#FFCC01',
      background: '#000000',
      text: '#FFFFFF',
    },
  };

  const ThemeContext = createContext();

  export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light'); // Tema inicial
  
    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
  
    return (
      <ThemeContext.Provider value={{ theme: themes[theme], toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  
  export const useTheme = () => useContext(ThemeContext);