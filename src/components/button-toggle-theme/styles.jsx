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
    transition: 0.3s;
        &:hover {
            box-shadow: 0 0 10px ${({theme}) => theme.borders}
            }
    
`