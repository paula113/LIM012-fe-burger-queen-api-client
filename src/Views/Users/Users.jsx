import React, { useState, useEffect } from 'react';
import './Users.scss';
import Table from '../../Components/Table';
import Pagination from '../../Components/Pagination';
import { getUsers } from '../../controller/user';

const Users = () => {
  // state
  //const [users, setUsers] = useState([]);

  const headTable= ['id', 'Email', 'Rol'];
  console.log('1');
  // getUser
    const [users, setUsers] = useState([]);
    useEffect(() => {
      async function fetchData(){
        const userData = await getUsers(localStorage.getItem('token'));
        setUsers(userData)
      }
      fetchData();
    },[]);
  // const initUser = { email: '', password: '', roles: { admin: '' } };
  // const [newuser, setNewUser] = useState(initUser);
  
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   console.log(name);
  //   console.log(value);
  //   setUser({ ...user, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const token = localStorage.getItem('token');
  //   const role = (user.roles === 'Admin') ? true : false;
    // postbyKeyword(token, user).then((data) => console.log(data))
    // handleChange(e, postbyKeyword(token, user));

  // };


  // crud functions
  // const putUserToTable = (keyword) => {
  //   const toEdit = users.filter((user) => (user.email === keyword));
  //   updateUserByKeyword(token, keyword, toEdit)
  //     .then((userUpdated) => {
  //       const usersUpdated = users.map((user) => ((user.email === keyword) ? userUpdated : user));
  //       setUsers(usersUpdated);
  //     });
  // };
        return (
          <div className="users">
            <h1>Users</h1>
            <form >
                <input placeholder="Email" type="email" name="email" />
                <input placeholder="Password" name="password" type="password" />
                <select name="roles">
                  <option value='service'>Service</option>
                  <option value='admin'>Admin</option>
                </select>
                <button type="submit">Add user</button>
            </form>
            <Table head={headTable} arrayData={users}/>
            <Pagination />
          </div>
        );
};

export default Users;
