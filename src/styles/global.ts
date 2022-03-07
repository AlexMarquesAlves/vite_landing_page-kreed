import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    html, body, #root {
      height: 100%;
    }

    body {
      background-color: #F8FDFF;
      font-family: 'Poppins';
    }

    button {
      background-color: transparent;
      font-family: 'Poppins';
      border: none;
      outline: none;
      cursor: pointer;
    }

    a {
      text-decoration: none;
      outline: none;
    }
`;

export default globalStyle;
