<<<<<<< Updated upstream
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

=======
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../contexts/theme-context";
import {
  ContainerMain,
  ContainerTitle,
  RotatingImage,
  InputName,
  DivInputName,
} from "./styles";

export function Main() {
  // Consome o tema do contexto
  const { theme } = useContext(ThemeContext);

  const isHidden = true;
  return (
    <ContainerMain style={{ backgroundColor: theme.background, color: theme.text }}>
      <DivInputName>
        <InputName
          id="name"
          type="text"
          placeholder="Buscar pelo nome"
          style={{
            backgroundColor: theme.primary,
            color: theme.text,
            borderColor: theme.secondary,
          }}
        />
        <a href="#">
          <FontAwesomeIcon
            icon={faCaretRight}
            size="2x"
            color={theme.secondary}
          />
        </a>
      </DivInputName>

      <ContainerTitle
        hidden={isHidden}
        style={{ color: theme.text }}
      >
        <RotatingImage
          src="../src/assets/images/logo-loading.png"
          alt="Logo carregando"
        />
        Carregando
      </ContainerTitle>
    </ContainerMain>
  );
}
>>>>>>> Stashed changes
