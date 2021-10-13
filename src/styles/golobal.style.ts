import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, ::after, ::before {
    box-sizing: border-box;
  }

  div {
    display: block;
  }

  body {
    width: 100%;
    min-height: 100vh;
    color: #5e676f;
    background: inherit;
    margin: 0;
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.4285714286;
    color: #212529;
    text-align: left;
    background: #f9f9fa;
  }

  html {
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(19, 24, 44, 0);
  }

  h2, h3, h4 {
    margin: 0;
    padding: 0;
  }`
