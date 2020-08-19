import React, { useState } from 'react';
import './Users.scss';
import Table from '../../Components/Table';
import Pagination from '../../Components/Pagination';
import postbyKeyword from '../../controller/User_controller';

const info = ['_id', 'email', 'rol'];
const usersData = [
  {
    _id: 1001001,
    email: 'yudith.cumba@gmail.com',
    roles: {
      admin: true,
    },
  },
  {
    _id: 1001002,
    email: 'user2@gmail.com',
    roles: {
      admin: false,
    },
  },
  {
    _id: 1001003,
    email: 'user3@gmail.com',
    roles: {
      admin: false,
    },
  },
];
const users = usersData.map((user) => {
  user.roles = (user.roles.admin) ? 'admin' : 'service';
  return user;
});

const Users = () => {
  const initUser = { email: '', role: '' };
  const [user, setUser] = useState(initUser);
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name);
    // console.log(value);
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    console.log(token);
    const roles = (user.role === 'admin') ? 'admin' : 'service';
    if (token && roles) {
      return postbyKeyword(token, 'user', 'email', user);
    }
    // return postbyKeyword(token, route, key, data);
  };
  return (
    <div id="users">
      <h1>Users</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input placeholder="Email" name="email" value={user.email} onChange={handleChange} />
        <input placeholder="Rol" name="role" value={user.role} onChange={handleChange} />
        <button type="submit">Add user</button>
      </form>
      <Table info={info} columns={users} />
      <Pagination />
    </div>
  );
};

export default Users;
