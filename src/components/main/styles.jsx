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

export const ButtonTogglerTheme = styled.button`
    width: 50px;
    height: 23px;
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.borders}; 
    border-radius: 50px;
`

export const Selector = styled.div`
    width: 25px;
    height: 17px;
    background-color: ${({ theme }) => theme.title};
    border-radius: 100px;
    transform: translateX(${({ theme }) => theme.positionButtonTheme});
`

export const Icon = styled.a`
     color: ${({ theme }) => theme.content};

`
export const DivInputName = styled.div`
    height: 30px;
    width: 90%;
    display: flex;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.borders};
    border-radius: 20px;
    
    `

export const InputName = styled.input`
    width: 90%;
    height: 30px;
    font-size: 16px;
    border: none;
    background-color: transparent;
    border-radius: 5px;
    padding: 10px;
    margin-right: 3px;
    &::placeholder {
      color: ${({ theme }) => theme.text};
    }
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