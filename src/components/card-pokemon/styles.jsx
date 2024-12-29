import styled from "styled-components";

export const CardContainer = styled.div`
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