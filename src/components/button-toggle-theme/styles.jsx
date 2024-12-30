import styled from "styled-components";

export const Button = styled.button`
    width: 50px;
    height: 23px;
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.borders}; 
    border-radius: 50px;
    cursor: pointer;
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