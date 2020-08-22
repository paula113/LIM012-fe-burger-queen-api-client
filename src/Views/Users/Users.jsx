import React, { useState, useEffect } from 'react';
import './Users.scss';
import Table from '../../Components/Table';
import Pagination from '../../Components/Pagination';
import { getUsers, postbyKeyword } from '../../controller/user';

const Users = () => {
  const initUser = { email: '', password: '', roles: '' };
  const [newuser, setNewUser] = useState(initUser);

  const headTable= ['id', 'Email', 'Rol'];
  // getUser
    const [users, setUsers] = useState([]);
    useEffect(() => {
      async function fetchData(){
        const userData = await getUsers(localStorage.getItem('token'));
        setUsers(userData)
      }
      fetchData();
    },[users]);


  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setNewUser({ ...newuser, [name]: value });
    };

    // useEffect(() => {
    //   console.log(newuser);
    //  }, [newuser]);

    const handleSubmit = (e) => {
      (newuser.roles === true ? newuser.roles = { admin: true } : newuser.roles = { admin: false } )
      async function fetchData() { 
        const newpost = await postbyKeyword(newuser);
        
      }
      fetchData();
      e.preventDefault();
    };
   

        return (
          <div className="users">
              <div className="containertop">
              <img src="https://raw.githubusercontent.com/paula113/LIM012-fe-burger-queen-api-client/e60c452ad793ea90d9e698f0fef3d6d190862ce8/src/assests/istockphoto-1049751988-612x612-removebg-preview%201.svg" alt="" />

            <form className="form" onSubmit={(e) => handleSubmit(e)}>
            {!!(newuser.email && newuser.password) ? <strong>Add Employee {newuser.email}</strong> : 'Please type emloyee email, password and role'}
              <input placeholder="Email" type="email" name="email" value={newuser.email} onChange={handleChange} />
              <input placeholder="Password" name="password" type="password" value={newuser.password} onChange={handleChange} minLength={6} required />
              <select name="roles" value={newuser.roles} onChange={handleChange}>
                <option value={false}>Service</option>
                <option value={true}>Admin</option>
              </select>
              <button type="submit">Add user</button>
            </form>
            </div>
            <Table head={headTable} arrayData={users}/>
            <Pagination />
          </div>
        );
};

export default Users;
