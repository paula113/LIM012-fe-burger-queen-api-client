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
        const info = [ '_id','email', 'rol']
        const usersData = [
            {
            "_id":1001001,
            "email":"yudith.cumba@gmail.com",
            "roles" : {
              "admin": true,
             }
            },
              {
            "_id":1001002,
            "email":"user2@gmail.com",
            "roles" : {
              "admin": false,
             }
            },
              {
            "_id":1001003,
            "email":"user3@gmail.com",
            "roles" : {
              "admin": false,
             }
            },
          ]
        const users = usersData.map((user) => {
            user.roles = (user.roles.admin)? 'admin': 'service'
            return user;
        });
        console.log(users);
        return (
            <div id="users">
                <h1>Users</h1>
                 <form>
                     <input placeholder="Email"></input>
                     <input placeholder="Rol"></input>
                     <button type="submit" >Add user</button>
                 </form>
                <Table info={info} columns={users}/>
            </div>
        )
    }
}
