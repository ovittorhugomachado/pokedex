<<<<<<< Updated upstream
import styled, { keyframes } from "styled-components";

export const ContainerMain = styled.div`
    min-height: 400px;
    width: 280px;
    background-color: ${({ theme }) => theme.content};
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.borders}; 
    margin: 0 auto;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 30px 0;
    gap: 15px;
    box-shadow: 4px 4px 0px ${({theme}) => theme.shadowContainer};
<<<<<<< HEAD:src/components/main-home/styles.jsx
    position: relative;
=======
=======
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import styled, { keyframes } from "styled-components";

const useThemeColors = () => {
  const { theme } = useContext(ThemeContext);
  return theme;
};

export const DivInputName = styled.div`
    height: 30px;
    width: 90%;
    display: flex;
    align-items: center;
    position: absolute;
    top: 45px;

    `

export const InputName = styled.input`
    width: 90%;
    height: 30px;
    font-size: 16px;
    border: 1px solid #FFCC01;
    background-color: transparent;
    border-radius: 5px;
    &::placeholder {
    color:  #FFCC01;
    font-style: italic; 
`
export const DivInputType = styled.div`
    height: 30px;
    width: 90%;
    display: flex;
    align-items: center;
    `


export const ContainerMain = styled.div`
  min-height: 400px;
  width: 280px;
  background-color: themes.background;
  border-radius: 5px;
  border: 2px solid #FFCC01;
  margin: 0 auto;
  margin-bottom:30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
>>>>>>> Stashed changes
>>>>>>> 035ca8c8ce361772a9a2891746178e3bed5809ba:src/components/main/styles.jsx

`;

export const CardPokemon = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Espaçamento entre os cards */
  justify-content: center; /* Centraliza os cards no contêiner */
  margin-top: 20px;
`;

export const Card = styled.div`
    width: 180px;
    height: 200px;
    background-color: ${({ theme }) => theme.content};
    border: 1px solid ${({ theme }) => theme.borders};
    border-radius: 10px;
    padding: 20px;
    box-shadow: 4px 4px 0px ${({theme}) => theme.shadowCard};

`

export const ContainerLoading = styled.h5`
  margin: 0;
  font-size: 30px;
  color: #0D1833;
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
`;

export const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const RotatingImage = styled.img`
  animation: ${spin} 2s linear infinite; /* Faz a imagem girar */
  width: 100px;
`;

export const Loading = styled.p`
  color: ${({theme}) => theme.text};
  font-weight: 700;
  font-size: 30px
`