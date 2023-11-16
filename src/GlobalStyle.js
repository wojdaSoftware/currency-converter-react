import { createGlobalStyle } from "styled-components";
import background from './converter-background.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
    ::after,
    ::before {
      box-sizing: inherit;
  }

  body {
    background-image: url(${background});
    background-repeat: repeat-y;
    background-size: cover;
    font-family: 'Poppins', sans-serif;
    margin: 0 20px;
  }
`;