import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  #root {
    margin: 0 auto;
    min-width: 393px;
    width: 100%;
    background-color: var(--background-default);
  }

  :root {
    font-family: var(--fonte-principal), sans-serif;
    font-size: 1em;
    font-weight: 400;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    display: flex;
    min-height: 100vh;
    width: 100%;
    background-color: var(--branco);
  }
`;