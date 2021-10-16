import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import * as G from './styles/golobal.style';
import './styles/font.style.css';
import HeaderComponent from './components/common/header/Header.component';
import UserListComponent from './components/user/UserList.component';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <G.GlobalStyle />
        <HeaderComponent />
        <UserListComponent />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;