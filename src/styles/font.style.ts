import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: "Noto Sans CJK KR Regular";
    src: local("Noto Sans CJK KR Regular");
    url: ('../assets/fonts/NotoSansCJKkr-Regular.otf') format('otf');
    font-weight: 300;
    font-style: normal;
  }
  
  @font-face {
    font-family: "Noto Sans CJK KR Midium";
    src: local("Noto Sans CJK KR Regular");
    url: ('../assets/fonts/NotoSansCJKkr-Medium.otf') format('otf');
    font-weight: 300;
    font-style: normal;
  }
  
  @font-face {
    font-family: "Gmarket Sans TTF Medium";
    src: local("Gmarket Sans TTF Medium");
    url: ('../assets/fonts/GmarketSansTTFMedium.ttf') format('otf');
    font-weight: 300;
    font-style: normal;
  }
`

