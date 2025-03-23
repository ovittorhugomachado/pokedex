import styled, { keyframes } from "styled-components";

export const ContainerMain = styled.div`
    min-height: 200px;
    width: 85%;
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
        @media (min-width: 1100px) {
            width: 95%;
        }
`;

export const ButtonTopMain = styled.a`
    cursor: pointer;
    border-radius: 20px;
    border: 1px solid;
    padding: 5px 10px;
    color: ${({ theme }) => theme.borders};
    background-color: ${({theme}) => theme.content};
    transform: translateY(-80%);
    transition: 0.3s;
        &:hover {
            box-shadow: 0 0 8px ${({theme}) => theme.borders}
            };
        @media (min-width: 675px) {
            font-size: 21px;
            transform: translateY(-50%);
            padding: 10px 15px;
            border-radius: 30px;

        }

`

export const DivNameAndImage = styled.div`
    @media (min-width: 675px) {
        max-width: 660px;
        padding: 30px 60px;
        display: flex;
        align-items: center;
        gap: 20px;
        }
`

export const Img = styled.img`
    @media (min-width: 675px) {
        grid-area: 0/1/0/1;
    }
    @media (min-width: 760px) {
        width: 250px;    
    }
`

export const DivNameAndType = styled.div`
    @media (min-width: 675px) {
        width: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
`

export const Name = styled.h1`
    color: ${({ theme }) => theme.title};
    font-weight: 900;
    font-size: 50px;
        @media (min-width: 760px) {
            font-size: 60px;
        }
`;

export const Title = styled.h3`
    color: ${({ theme }) => theme.title};
    font-weight: 900;
    font-size: 30px;
    margin-top: 25px;
    @media (min-width: 675px) {
            grid-area: 2 / 2 / 2 / 3;
            margin-top: 0;
    }
`

export const Title2 = styled.h3`
    color: ${({ theme }) => theme.title};
    font-weight: 900;
    font-size: 30px;
    margin: 25px 0 7px;
    text-decoration: underline ${({ theme }) => theme.shadowContainer};

`

export const DivType = styled.div`
    @media (min-width: 675px) {
            grid-area: 2 / 3 / 3 / 3;
            display: flex;
            gap: 20px;
    }
`

export const subTitle = styled.h4`
    color: ${({ theme }) => theme.text}
`

export const ListMoves = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
`

export const Text = styled.p`
    color: ${({ theme }) => theme.text};
    line-height: 25px;
    @media (min-width: 675px) {
        font-size: 20px;
    }

`
export const TextType = styled.p`
    color: ${({ theme }) => theme.text};
        @media (min-width: 675px) {
            font-size: 30px;
        }
            
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
    transition: 0.3s;
    transform: translateY(250%);
      &:hover {
        transform: scale(105%) translateY(230%)
`