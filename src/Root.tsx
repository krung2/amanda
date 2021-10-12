import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <div>
          a
        </div>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
