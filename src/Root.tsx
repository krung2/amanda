import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import TestComponent from './components/test.component';
import * as G from './styles/golobal.style';
import GlobalFontFace from './styles/font.style';
import UserCardComponent from './components/userCard/userCard.component';
import HeaderComponent from './components/common/header/Header.component';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <G.GlobalStyle />
        <GlobalFontFace />
        {/* <TestComponent /> */}
        <HeaderComponent />
        <UserCardComponent />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;