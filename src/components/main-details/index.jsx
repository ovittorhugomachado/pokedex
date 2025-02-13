import { useContext } from "react";
import { ContainerMain, Name, Title } from "./style";
import { ThemeContext } from "../../contexts/theme-context";
import { getPokemonsData } from "../../services/pokeApi";
import { ButtonToggleTheme } from "../button-toggle-theme";

export function MainDetails() {

    const { theme } = useContext(ThemeContext);


    

    return(
        <ContainerMain theme={theme}>
            <ButtonToggleTheme />

        </ContainerMain>
    )

}