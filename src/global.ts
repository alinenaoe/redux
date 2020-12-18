import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
  }

  body {
    box-sizing: border-box;
  }

  ol, ul {
	  list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
