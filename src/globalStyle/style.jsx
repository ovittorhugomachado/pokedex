import { createGlobalStyle } from "styled-components";

export const Style = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: geologica, sans-serif;
    font-weight: 300;
    list-style: none;
    font-style: none;
}

html {
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.background};
}

body {
  max-width: 1920px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.background};
}

a {
  text-decoration: none;
}
`;