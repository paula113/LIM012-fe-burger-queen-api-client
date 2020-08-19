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
  const initUser = { email: '', password: '', role: '' };
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
    // if (token && roles) {
    //   postbyKeyword(token, 'email', user.email);
    // }
    // return postbyKeyword(token, route, key, data);
  };
  return (
    <div id="users">
      <div className="containertop">
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <input placeholder="Email" type="email" name="email" value={user.email} onChange={handleChange} />
          <input placeholder="Password" name="password" type="password" value={user.password} onChange={handleChange} />
          <select>
            <option value={user.role}>Service</option>
            <option value={user.role}>Admin</option>
          </select>
          <button type="submit">Add user</button>
        </form>
        <img src="https://raw.githubusercontent.com/paula113/LIM012-fe-burger-queen-api-client/e60c452ad793ea90d9e698f0fef3d6d190862ce8/src/assests/istockphoto-1049751988-612x612-removebg-preview%201.svg" alt="" />

      </div>
      <Table info={info} columns={users} />
      <Pagination />
    </div>
  );
};

export default Users;
