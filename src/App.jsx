import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';

import Login from './Views/Login/Login';
import Home from './Views/Home/Home';
import Orders from './Views/Orders/Orders';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
    this.auth = this.auth.bind(this);
  }

  auth() {
    this.setState({ isLogin: true });
  }

  render() {
    const { isLogin } = this.state;
    // console.log(this.state.isLogin);
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Login auth={this.auth} />
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
  }
}
