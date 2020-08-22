import React, { useState, useEffect } from 'react';
import './Users.scss';
import Table from '../../Components/Table';
import Pagination from '../../Components/Pagination';
import { getUsers, updateUserByKeyword } from '../../controller/user';

const Users = () => {
  // state
  const [users, setUsers] = useState([]);
  const [dataToPut, setDataToPut] = useState({});
  const headTable= ['id', 'Email', 'Rol'];

  // getUser
    useEffect(() => {
      async function fetchUser(){
        const userData = await getUsers(localStorage.getItem('token'));
        setUsers(userData)
      }
      fetchUser();
    },[]);

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
            <form onSubmit={(event) => userSubmit(event)}>
                <input placeholder="Email" type="email" name="email" id="email"/>
                <select name="roles" id="roles">
                  <option value='service'>Service</option>
                  <option value='admin'>Admin</option>
                </select>
                <button type="submit" id="submitUser" >Add user</button>
            </form>
            <Table head={headTable} arrayData={users} putData={putData}/>
            <Pagination />
          </div>
        );
};

export default Users;
