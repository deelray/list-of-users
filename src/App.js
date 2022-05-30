import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserDetails from './pages/UserDetails';
import Main from './pages/Main';
import NotFound from './components/NotFound';
import { ROUTE_MAIN, ROUTE_USER } from './constants';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={ROUTE_MAIN} element={<Main />} />
        <Route exact path={`${ROUTE_USER}/:username`} element={<UserDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
