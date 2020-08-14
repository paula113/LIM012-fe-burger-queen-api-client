import React, { Component } from 'react'
import { Link , Switch, Route} from 'react-router-dom'
import './NavBar.scss'
import Users from '../Views/Users/Users'
import Products from '../Views/Products/Products';
import Orders from '../Views/Orders/Orders';

export default class NavBar extends Component{

    render(){
        const { path , url } = this.props;
        console.log(url);
        console.log(path);
        return (
            <div>
                 <nav>
                        <ul>
                            <li><Link to={`${url}/users`}>Users</Link></li>
                            <li><Link to={`${url}/products`}>Products</Link></li>
                            <li><Link to={`${url}/orders`}>Orders</Link></li>
                        </ul>
                    </nav> 

                <Switch>
                    <Route exact path={path}>
                        <Users/>
                    </Route>
                    <Route exact path={`${path}/users`}>
                        <Users/>
                    </Route>
                    <Route exact path={`${path}/products`}>
                        <Products/>
                    </Route>
                    <Route exact path={`${path}/orders`}>
                        <Orders/>
                    </Route>
                </Switch>
            </div>
        )
    }
}



