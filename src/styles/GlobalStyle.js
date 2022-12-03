import { createGlobalStyle } from 'styled-components';

/* You can add global styles to this file, and also import other style files */

const GlobalStyle = createGlobalStyle`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    word-wrap: break-word;
  }

  html {
    min-height: 100vh;
    font-family: 'Nunito', sans-serif;
  }

  body {
    color: ${({ theme }) => theme.colors.dark};
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
    width: 100%;
  }

  button,
  input, 
  textarea {
    border: none;
    outline: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;