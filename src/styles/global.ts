import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    padding: 0;
    margin: 0;
    border: 0px;
    box-sizing: border-box;
  }

  html {
    font-family: 'Nunito', sans-serif;
    color: ${(props) => props.theme.colors.text};
    font-size: 1.6rem;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
  }
  
  body {
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.theme.colors.background};
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    background: transparent;
  }

  .logo {
    padding: 1rem;
  }
`;
