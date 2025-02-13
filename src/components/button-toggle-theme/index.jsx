import { ThemeContext } from "../../contexts/theme-context";
import { useContext } from "react";
import { Icon } from "./styles";

export function ButtonToggleTheme() {

const { theme, changeTheme } = useContext(ThemeContext);

const handleClick = () => {
    changeTheme();
  };

    return (
        <Icon onClick={handleClick} theme={theme}>{theme.icon}</Icon>
    )
}

