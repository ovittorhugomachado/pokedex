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
    padding: 30px 0;
    gap: 5px;
    box-shadow: 4px 4px 0px ${({ theme }) => theme.shadowContainer};
    position: relative;
`;

export const ButtonTopMain = styled.a`
    cursor: pointer;
    border-radius: 20px;
    border: 1px solid;
    padding: 5px 10px;
    color: ${({ theme }) => theme.borders};
    background-color: ${({theme}) => theme.content};
    transform: translateY(-80%)

`

export const Name = styled.h1`
    color: ${({ theme }) => theme.title};
    font-weight: 900;
    font-size: 50px;
`;

export const Title = styled.h3`
    color: ${({ theme }) => theme.title};
    font-weight: 900;
    font-size: 30px;
    margin-top: 25px;
`

export const subTitle = styled.h4`
    color: ${({ theme }) => theme.text}
`

export const Text = styled.p`
    color: ${({ theme }) => theme.text};
    margin
`

export const Ul = styled.ul`
    color: ${({ theme }) => theme.text};
    list-style-type: disc

`

export const Li = styled.li`
    color: ${({ theme }) => theme.text}
`

export const ContainerLoading = styled.h5`
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

export const Loading = styled.p`
  color: ${({ theme }) => theme.text};
  font-weight: 700;
  font-size: 30px;
`

export const Button = styled.button`
    width: 200px;
    display: inline-block;
    background-color: ${({ theme }) => theme.backgroundButton};
    border-radius: 8px;
    border: 2px solid ${({ theme }) => theme.background};
    box-shadow: 3px 3px 0px ${({ theme }) => theme.shadowContainer};
    padding: 10px 20px;
    text-decoration: none;
    color: ${({ theme }) => theme.textButton};
    font-size: 20px;
    cursor: pointer;
    transform: translateY(250%);
`