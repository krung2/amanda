import { RecoilRoot } from 'recoil';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import * as G from './styles/golobal.style';
import './styles/font.style.css';
// import UserListPage from './pages/userList.page';
import App from './components/App';

const Root = () => {
  return (
    <RecoilRoot>
      <HashRouter>
        <G.GlobalStyle />
        <App />
      </HashRouter>
    </RecoilRoot>
  );
}

export default Root;