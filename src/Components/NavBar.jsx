import React from 'react';
import {
  Link, Switch, Route, withRouter,
} from 'react-router-dom';
import '@material-ui/core/Grid';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './Components.scss';
import Users from '../Views/Users/Users';
import Products from '../Views/Products/Products';
import Orders from '../Views/Orders/Orders';

const NavBar = (prop) => {
  const { path, url, history } = prop;
  return (
    <div className="navBarComponent">
      <nav>
        <img alt="" src="https://raw.githubusercontent.com/paula113/LIM012-fe-burger-queen-api-client/bd2da1a0fc4e35daafdb4d20d19a2c03b9610ebe/src/assests/Vectorburger.svg" />
        <ul>
          <li><Link to={`${url}/users`}>Users</Link></li>
          <li><Link to={`${url}/products`}>Products</Link></li>
          <li><Link to={`${url}/orders`}>Orders</Link></li>
        </ul>
        <ExitToAppIcon className="icon" onClick={() => {
          localStorage.removeItem('token');
          history.push('/');
        }}   />
      </nav>

      <Switch>
        <Route exact path={path}>
          <Users />
        </Route>
        <Route exact path={`${path}/users`}>
          <Users />
        </Route>
        <Route exact path={`${path}/products`}>
          <Products />
        </Route>
        <Route exact path={`${path}/orders`}>
          <Orders />
        </Route>
      </Switch>
    </div>
  );
};
export default withRouter(NavBar);
