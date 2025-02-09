import styled from "styled-components";

export const Icon = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 1px solid;
    color: ${({ theme }) => theme.borders};
    background-color: ${({theme}) => theme.content};
    position: absolute;
    top: -40px;
        &:hover {
        opacity: 0.8;
    }
    
`