import { createGlobalStyle } from "styled-components";

export const theme = {
    colors: {
        purple: "#3F3D56",
        pink: "#EE24FF",
        gray: "#828282",
        white: "#ECEFF2",
    },

    layout: {
        container: "1020px"
    }
}

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden; 
  }

  body {
    display: flex;
    flex-direction: column;
    background: #ECEFF2; 
  }
`;
