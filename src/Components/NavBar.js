import React, { Component } from 'react'
import { Link , Switch, Route} from 'react-router-dom'
import './Components.scss'
import Users from '../Routes/Users/Users'
import Products from '../Routes/Products/Products';
import Orders from '../Routes/Orders/Orders';

export default class NavBar extends Component{

    render(){
        const { path , url } = this.props;
        return (
            <div className = "navBarComponent">
                 <nav>
                        <ul>
                            <li><Link to={`${url}/users`}>Users</Link></li>
                            <li><Link to={`${url}/products`}>Products</Link></li>
                            <li><Link to={`${url}/orders`}>Orders</Link></li>
                        </ul>
                    </nav> 

                <Switch>
                    <Route exact path={path}>
                        ç<Users/>
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



