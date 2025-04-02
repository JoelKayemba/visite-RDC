// src/styles/GlobalStyle.js

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.polices.texte};
    background-color: ${({ theme }) => theme.couleurs.noir};
    color: ${({ theme }) => theme.couleurs.blanc};
    line-height: 1.6;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  h1, h2, h3, h4, h5 {
    font-family: ${({ theme }) => theme.polices.titre};
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }
`;

export default GlobalStyle;
