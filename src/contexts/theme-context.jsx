import { createContext, useState } from "react";
import { IoSunny } from "react-icons/io5";


export const themes = {
    dark: {
        icon: <IoSunny />,
        background: '#0d1833',
        content: '#103183',
        borders: '#ffd500',
        title: '#ffd500',
        text: '#ebebeb',
        shadowContainer: '#8f7100',
        shadowCard: '#0d1833',
        backgroundButton: '#ffd500',
        textButton: '#103183',
    },
    light: {
        icon: <IoSunny />,
        background: '#ebebed',
        content: '#ebebed',
        borders: '#0d1833',
        title: '#0d1833',
        text: '#ebebeb',
        shadowContainer: '#103183',
        shadowCard: '#8f7100',
        backgroundButton: '#103183',
        textButton: '#ffd500',
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

