
import styled, { keyframes } from "styled-components";

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
  background-color: #103183;
  border-radius: 5px;
  border: 2px solid #FFCC01;
  margin: 0 auto;
  margin-bottom:30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

`;

export const ContainerTitle = styled.h5`
  margin: 0;
  font-size: 30px;
  color: #FFCC01;
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