import { createGlobalStyle } from "styled-components";

export const Style = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: bangers, sans-serif;
        letter-spacing: 1px;
        font-weight: 300;
        list-style: none;
        font-style: none;
        transition: background-color 0.3s ease, border-color 0.5s ease, box-shadow 0.5s ease;
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

    #root {
        max-width: 1280px;
        margin: 0 auto;
        text-align: center;
        padding-bottom: 120px;
        }

    a {
        text-decoration: none;
        }

    svg, .svg-inline--fa {
        width: 70%;
        height: 70%;
        }
`
;