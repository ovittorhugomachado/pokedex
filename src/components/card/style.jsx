import styled from "styled-components";

export const Card = styled.div`
    width: 180px;
    height: 200px;
    background-color: ${({ theme }) => theme.content};
    border: 1px solid ${({ theme }) => theme.borders};
    border-radius: 10px;
    padding: 20px;
    box-shadow: 4px 4px 0px ${({theme}) => theme.shadowCard};
    transform: translateX(10px);
    margin-bottom: 20px
`

export const Name = styled.h1`
    color: ${({ theme }) => theme.title}
`