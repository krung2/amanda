import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import TestComponent from './components/test.component';
import * as G from './styles/golobal.style';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <G.GlobalStyle />
        <TestComponent />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;