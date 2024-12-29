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
        shadowCard: '#FFD812',
        button: '#103183',
    }
}


export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.dark)

    const changeTheme = () => {
        setTheme(theme === themes.dark ? themes.light : themes.dark)
    };
    return (
        <ThemeContext.Provider value={{ theme, setTheme, changeTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

