import styled from "styled-components";

export const Button = styled.button`
    width: 200px;
    background-color: ${({theme}) => theme.button};
    border-radius: 8px;
    border: 2px solid ${({theme}) => theme.background};
    box-shadow: 3px 3px 0px ${({theme}) => theme.shadowContainer};
    padding: 10px 20px;
`

export const Link = styled.a`
 text-decoration: none;
    color: #0D1833;
    font-size: 20px;
    font-family: bangers;
`