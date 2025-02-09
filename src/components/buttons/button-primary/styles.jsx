import styled from "styled-components";

export const Button = styled.a`
    width: 200px;
    display: inline-block;
    background-color: ${({theme}) => theme.backgroundButton};
    border-radius: 8px;
    border: 2px solid ${({theme}) => theme.background};
    box-shadow: 3px 3px 0px ${({theme}) => theme.shadowContainer};
    padding: 10px 20px;
    text-decoration: none;
    color: ${({theme}) => theme.textButton};
    font-size: 20px;
    cursor: pointer;
    transition: transform 0.3s ease;
        &:hover {
            transform: translate( 2px, 2px);
        }
`