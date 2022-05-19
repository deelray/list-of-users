import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import UserDetails from './pages/UserDetails';
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/users/:username" component={UserDetails} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
