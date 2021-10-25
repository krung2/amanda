import { RecoilRoot } from 'recoil';
import { HashRouter } from 'react-router-dom';
import * as G from './styles/golobal.style';
import './styles/font.style.css';
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