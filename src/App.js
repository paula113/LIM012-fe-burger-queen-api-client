import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
//componentes
import Login from '../src/Routes/Auth/Login'
import Home from './Views/Home/Home'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin : false,
    };
    this.auth = this.auth.bind(this);
  }
  auth(){
    this.setState({ isLogin : true })
  }
  render() {
    console.log(this.state.isLogin);
    return (
      <Router>
          <Switch>
            <Route exact path="/">
              <Login auth={this.auth}/>
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
          { this.state.isLogin && <Redirect to="/home"/>} 
      </Router>)
  }
}