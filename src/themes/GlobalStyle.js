// noinspection CssInvalidPseudoSelector

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  input::-webkit-contacts-auto-fill-button,
  input::-webkit-credentials-auto-fill-button {
    visibility: hidden;
    position: absolute;
    right: 0;
  }
  html {
    font-size: 62.5%;
    scrollbar-color: #46495d #282A35;
    scrollbar-width: thin;
    -webkit-tap-highlight-color: transparent;
    
    
  }

  body {

    font-family: "Inter", sans-serif !important;
    font-size: 1.8rem;
    font-weight: normal;
    line-height: 3rem;

  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Rubik", sans-serif;
    font-weight: normal;
    line-height: 3.2rem;
  }


  h1 {
    font-size: 4.5rem
  }

  h2 {
    font-size: 4rem;
  }

  h3 {
    font-size: 3rem
  }

  h4 {
    font-size: 2.5rem
  }

  h5 {
    font-size: 2rem
  }

  h6 {
    font-size: 1.5rem
  }

  h1, h2 {
    margin-bottom: 15px;
  }

  h3, h4 {
    margin-bottom: 10px;
  }

  body::-webkit-scrollbar {
    width: 10px; /* width of the entire scrollbar */
  }

  body::-webkit-scrollbar-track {
    /* //background: linear-gradient(to right, red, blue); */

     background: ${(props) =>
       (props.appTheme === 'dark' && '#1b1d25') ||
       (props.appTheme === 'light' && '#989898') ||
       (props.appTheme === 'chocolate' && 'rgb(44,23,16)')};
}

  body::-webkit-scrollbar-thumb {
    width: 10px;
    background-color: ${(props) =>
      (props.appTheme === 'dark' && '#3a3d5d') ||
      (props.appTheme === 'light' && '#9a9a9a')}; /* color of the scroll thumb */
    box-shadow:  inset 0 0  5px  4px
    ${(props) =>
      (props.appTheme === 'chocolate' && 'rgba(136,56,18,0.7)') ||
      (props.appTheme === 'light' && 'rgba(2,2,2,0.2)') ||
      (props.appTheme === 'dark' && 'rgba(222,222,222,0.15)')};
    border-radius: 50px; /* roundness of the scroll thumb */
    border: 2px solid #3A3D4D; /* creates padding around scroll thumb */
  }

  .fadeIn {
    animation: fadein 700ms;
    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

export default GlobalStyle;
