import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';

import Login from './Views/Login/Login';
import Home from './Views/Home/Home';
import Orders from './Views/Orders/Orders';

const App = () => {
  const token = localStorage.getItem('token');
  const isLogin = !!token;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
      </Switch>
      { isLogin && <Redirect to="/home" />}
    </Router>
  );
};
export default App;
