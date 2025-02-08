<<<<<<< Updated upstream
import { createContext, useState } from "react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const themes = {
    dark: {
        icon: <FontAwesomeIcon icon={faSun} />,
        positionButtonTheme: '1px',
        buttonTheme:'',
        background: '#0D1833',
        content: '#103183',
        borders: '#FFD812',
        title: '#FFD812',
        text: '#ebebeb',
        shadowContainer: '#8f7100',
        shadowCard: '#0D1833',
        button: '#FFD812',
        textButton: '#103183',

    },
    light: {
        icon: <FontAwesomeIcon icon={faMoon} />,
        positionButtonTheme: '80%',
        buttonTheme:' ' , 
        background: '#ebebeb',
        content: '#ebebeb',
        borders: '#103183',
        title: '#0D1833',
        text: '#0D1833',
        shadowContainer: '#284da7',
        shadowCard: '#0D1833',
        button: '#103183',
        textButton: '#FFD812',
    }
}


export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.light)

    const changeTheme = () => {
        setTheme(theme === themes.dark ? themes.light : themes.dark)
    };
    return (
        <ThemeContext.Provider value={{ theme, setTheme, changeTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

=======
import React, { createContext, useState } from 'react';

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

  export const ThemeContext = createContext();

  export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(themes.light); // Tema inicial
  
    const toggleTheme = () => {
      setTheme((prevTheme) =>
        prevTheme === themes.light ? themes.dark : themes.light
      );
    };
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  
>>>>>>> Stashed changes
