import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { ContainerMain, ContainerTitle, RotatingImage, InputName, DivInputName, ButtonTogglerTheme, Selector, Icon } from "./styles"

import { CardPokemon } from "../card-pokemon/card-pokemon";
import { CardContainer } from "../card-pokemon/styles";
export function Main() {

    const { theme, changeTheme } = useContext(ThemeContext)

    const isHidden = true;
    return (
        <ContainerMain theme={theme}>
            <ButtonTogglerTheme theme={theme}>
                <Selector theme={theme}>
                    <Icon theme={theme}>{theme.icon}</Icon>
                </Selector>
            </ButtonTogglerTheme>
            <DivInputName theme={theme}>
                <InputName theme={theme} id="name" type="text" placeholder="Buscar pelo nome" />
                <a href="#"><FontAwesomeIcon icon={faChevronRight} color='#FFD812' /></a>
            </DivInputName>

            <CardContainer>
                <CardPokemon />
            </CardContainer>
            

            <ContainerTitle hidden={isHidden}>
                <RotatingImage src="../src/assets/images/logo-pokebola.png" alt="Logo carregando" />
                Carregando
            </ContainerTitle>
        </ContainerMain>
    )
}

