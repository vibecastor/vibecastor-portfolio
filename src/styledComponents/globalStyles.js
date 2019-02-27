import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    max-width: 100%;
    font-family: 'Roboto';
    background: #ffffff;
    font-size: 100%;
    height: 100vh;
  }
  
  h1 {
  font-size: 2em;
  /* 2x body copy size = 32px */
  line-height: 1.25;
  /* 45px / 36px */
}

h2 {
  font-size: 1.625em;
  /* 1.625x body copy size = 26px */
  line-height: 1.15384615;
  /* 30px / 26px */
}

h3 {
  font-size: 1.375em;
  /* 1.375x body copy size = 22px */
  line-height: 1.13636364;
  /* 25px / 22px */
}

p {
    line-height: 1.75;
    color: black;
}

button {
  border: 0;
}

`;

export default GlobalStyle;
