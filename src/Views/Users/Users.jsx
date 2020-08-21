import React, { useState } from 'react';
import './Users.scss';
import Table from '../../Components/Table';
import Pagination from '../../Components/Pagination';
import { getUsers, updateUserByKeyword } from '../../controller/user';
// import postbyKeyword from '../../controller/User_controller';

const info = ['_id', 'email', 'rol'];
const token = localStorage.getItem('token');

const Users = () => {
  // state
  const [users, setUsers] = useState([]);

  getUsers(token)
    .then((userData) => {
      setUsers(userData);
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name);
    // console.log(value);
    setUsers({ ...users, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const roles = (user.role === 'admin') ? 'admin' : 'service';
    // return postbyKeyword(token, route, key, data);
  };

  // crud functions
  const putUserToTable = (keyword) => {
    const toEdit = users.filter((user) => (user.email === keyword));
    updateUserByKeyword(token, keyword, toEdit)
      .then((userUpdated) => {
        const usersUpdated = users.map((user) => ((user.email === keyword) ? userUpdated : user));
        setUsers(usersUpdated);
      });
  };
  return (
    <div id="users">
      <h1>Users</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input id="email" placeholder="Email" name="email" value={users.email} onChange={handleChange} />
        <input id="role" placeholder="Rol" name="role" value={users.role} onChange={handleChange} />
        <button type="submit">Add user</button>
      </form>
      <Table info={info} columns={users} put={putUserToTable} />
      <Pagination />
    </div>
  );
};

export default Users;
