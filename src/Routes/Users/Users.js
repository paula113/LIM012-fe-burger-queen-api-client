import React, { Component } from 'react'
import './Users.scss'
import Table from '../../Components/Table';
export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AreUsers : true,
        };
      }
    render() {
        const info = [ 'id','email', 'rol']
        return (
            <div id="users">
                <h1>Users</h1>
                 <form>
                     <input placeholder="Email"></input>
                     <input placeholder="Rol"></input>
                     <button type="submit" >Add user</button>
                 </form>
                <Table info={info}/>
            </div>
        )
    }
}
