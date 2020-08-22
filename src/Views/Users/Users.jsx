import React, { useState, useEffect } from 'react';
import './Users.scss';
import Table from '../../Components/Table';
import Pagination from '../../Components/Pagination';
import { getUsers, postbyKeyword, updateUserByKeyword, deletebyKeyword } from '../../controller/user';


const Users = () => {
  //-------------------------STATE------------------------------//
  const [users, setUsers] = useState([]);
  const [dataToPut, setDataToPut] = useState({});
  const headTable= ['id', 'Email', 'Rol'];
//-------------------------GET USER------------------------------//
    useEffect(() => {
      async function fetchUser(){
        const userData = await getUsers(localStorage.getItem('token'));
        setUsers(userData)
      }
      fetchUser();
    },[users]);
//-------------------------UPDATE USER------------------------------//

    function putData(data){
      document.getElementById('email').value= data.email;
      document.getElementById('submitUser').textContent = 'Save changes';
      setDataToPut(data);
    }
    async function userSubmit(event) {
      event.preventDefault();
      const button = document.getElementById('submitUser');
      if(button.textContent = 'Save changes'){
        const newEmail = document.getElementById('email').value;
        const newRol = document.getElementById('roles').value;
        const body = {
          email : newEmail,
          roles : { admin : (newRol === 'admin') }
        }
      const newUser = await updateUserByKeyword(localStorage.getItem('token'),dataToPut.email, body);
      const newUsers = await users.map((user) => (user.email === dataToPut.email)? newUser : user);
      console.log(newUsers);
      setUsers(newUsers);
      }
    };
//-------------------------POST NEW USER------------------------------//
  const initUser = { email: '', password: '', roles: '' };
  const [newuser, setNewUser] = useState(initUser);
    const handleChange = (e) => {
      const { name, value } = e.target;
      setNewUser({ ...newuser, [name]: value });
    };

    const handleSubmit = (e) => {
      (newuser.roles === 'admin' ? newuser.roles = { admin: true } : newuser.roles = { admin: false } )
      async function fetchData() { 
        const newpost = await postbyKeyword(newuser);
      }
      fetchData();
      e.preventDefault();
    };
 //-------------------------DELETE USER------------------------------//
  const deleteBy = (data) => {
  async function fetchData() { 
    const deleted = await deletebyKeyword(data._id);
  }
  fetchData();
  }
        return (
          <div className="users">
              <div className="containertop">
              <img src="https://raw.githubusercontent.com/paula113/LIM012-fe-burger-queen-api-client/e60c452ad793ea90d9e698f0fef3d6d190862ce8/src/assests/istockphoto-1049751988-612x612-removebg-preview%201.svg" alt="" />

            <form className="form" onSubmit={(e) => handleSubmit(e)}>
            {!!(newuser.email && newuser.password) ? <strong>Add Employee {newuser.email}</strong> : 'Please type emloyee email, password and role'}
              <input placeholder="Email" id="email" type="email" name="email" value={newuser.email} onChange={handleChange} />
              <input placeholder="Password" name="password" type="password" value={newuser.password} onChange={handleChange} minLength={6} required />
              <select name="roles" value={newuser.roles} onChange={handleChange}>
                <option value='service'>Service</option>
                <option value='admin'>Admin</option>
              </select>
              <button type="submit" id="submitUser">Add user</button>
            </form>
            </div>
            <Table head={headTable} arrayData={users} putData={putData} deleteBy={deleteBy}/>
            <Pagination />
          </div>
        );
};

export default Users;
