import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    html {
        width: auto;
    }

    body {
        max-width: 100vw;
        max-height: 100vh;
        background-color: #f5f5f5;
    }
`

export {GlobalStyled}