import styled from "styled-components"

export const DivInputName = styled.div`
    height: 30px;
    width: 90%;
    display: flex;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.borders};
    border-radius: 20px;
    gap: 7px
    `

export const InputName = styled.input`
    width: 85%;
    height: 30px;
    font-size: 16px;
    border: none;
    background-color: transparent;
    border-radius: 20px;
    padding: 10px;
    margin-right: 3px;

    &::placeholder {
      color: ${({ theme }) => theme.text};
    }

    &:hover {
    border: 1px solid ${({ theme }) => theme.borders};
    background-color: ${({ theme }) => theme.content};
  }

    &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.borders};
    background-color: ${({ theme }) => theme.background};

  }
  `;

  