import styled from "styled-components"

export const DivInputName = styled.div`
    height: 30px;
    width: 90%;
    display: flex;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.borders};
    border-radius: 7px;
    `

export const InputName = styled.input`
    width: 100%;
    height: 30px;
    font-size: 16px;
    border: none;
    background-color: transparent;
    border-radius: 7px;
    padding: 10px;
    margin-right: 3px;
    transform: translateX(-1px);
    outline: 0;
    color: ${({theme}) => theme.title};

    &::placeholder {
      color: ${({ theme }) => theme.title};
    }
  
  `

  export const ButtonSearch = styled.button`
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    transform: translateX(-7%);
    width: 30px;
    height: 90%;
    border: none;
    cursor: pointer;
  `

  