import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//componentes
import Login from './Views/Login/Login'
import Home from './Views/Home/Home'
import Orders from './Views/Orders/Orders';
export default class App extends Component {
  /*constructor(props) {
    super(props);
    this.state = {
      isLogin = false,
    };
  }*/
  render() {
    return (
      <Router>
        <div>
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
        </div>
      </Router>)
  }
}