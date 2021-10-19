import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import * as G from './styles/golobal.style';
import './styles/font.style.css';
// import UserListPage from './pages/userList.page';
import App from './components/App';

const Root = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <G.GlobalStyle />
        <App />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default Root;