import { ThemeContext } from "../../contexts/theme-context";
import { useContext } from "react";
import { Button, Selector, Icon } from "./styles";

export function ButtonToggleTheme() {

const { theme, changeTheme } = useContext(ThemeContext);

const handleClick = () => {
    changeTheme();
  };

    return (
            <Button id="button-theme" onClick={handleClick} theme={theme}>
                <Selector theme={theme}>
                    <Icon theme={theme}>{theme.icon}</Icon>
                </Selector>
            </Button>       
    )
}

