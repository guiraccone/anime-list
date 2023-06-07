import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`   

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: var(--black);
    width: 100%;
}

body,
button, select, option {
    font-family: Jost,  sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1rem;
}
` 