import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { ContainerMain, ContainerTitle, RotatingImage } from "./styles"
import { ButtonToggleTheme } from "../button-toggle-theme/button-toggle-theme";

import { CardPokemon } from "../card-pokemon/card-pokemon";
import { CardContainer } from "../card-pokemon/styles";
import { InputSearch } from "../input-search/input-search";
import { DataPokemon } from "../data-pokemon/data-pokemon";
export function Main() {

    const { theme, changeTheme } = useContext(ThemeContext)

    const isHidden = true;
    return (
        <ContainerMain theme={theme}>
            <ButtonToggleTheme />
           
            <InputSearch theme={theme}/>

            <DataPokemon />
            

            <ContainerTitle hidden={isHidden}>
                <RotatingImage src="../src/assets/images/logo-pokebola.png" alt="Logo carregando" />
                Carregando
            </ContainerTitle>
        </ContainerMain>
    )
}

