import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, ::after, ::before {
    box-sizing: border-box;
    position: relative;
  }

  #root {
    z-index: -10;
 }

  div {
    display: block;
  }
  
  body {
    min-height: 100vh;
    background: inherit;
    margin: 0;
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.4285714286;
    color: #212529;
    text-align: left;
    background: #ffffff;
    z-index: -10;
  }

  html {
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(19, 24, 44, 0);
    font-family: Noto Sans CJK KR Midium;
  }

  h2, h3, h4 {
    margin: 0;
    padding: 0;
  }`