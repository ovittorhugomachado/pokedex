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
    padding: 10px 0;
    gap: 15px;
    box-shadow: 4px 4px 0px ${({theme}) => theme.shadowContainer};

`;

export const ContainerTitle = styled.h5`
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