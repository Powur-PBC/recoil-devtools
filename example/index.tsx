import 'react-app-polyfill/ie11';
import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import Example from './src/App';

import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
      <React.StrictMode>
        <Example />
      </React.StrictMode>
    </RecoilRoot>
  );
};

ReactDOM.createRoot(document.getElementById(`root`) as HTMLElement).render(
  <App />
);