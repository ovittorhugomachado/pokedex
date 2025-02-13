import styled from "styled-components";

export const LogoPokemon = styled.h1`
    width: 300px;
    height: 120px;
    margin: 30px auto 50px;
    background-size: contain; /* Faz com que a imagem de fundo se ajuste sem cortar */
    background-repeat: no-repeat; /* Garante que a imagem não seja repetida */
    background-position: center; /* Centraliza a imagem no elemento */
    background-image: url(../src/assets/images/logo-pokemon.png); /* Define a imagem de fundo */
    transition: 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
    transform: scale(1.04);
  }
  `;