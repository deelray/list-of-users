import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { rootStore } from './models/RootStore';
import { RootStoreContext } from './models/RootContext';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RootStoreContext.Provider value={rootStore}>
      <HashRouter>
        <App />
      </HashRouter>
    </RootStoreContext.Provider>
  </React.StrictMode>
);
