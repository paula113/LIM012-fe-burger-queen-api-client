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
      document.getElementById('email').value = data.email;
      document.getElementById('submitUser').textContent = 'Save changes';
      setDataToPut(data);
    }

    async function userSubmit(event) {
      event.preventDefault();
      const button = document.getElementById('submitUser');
      const newEmail = document.getElementById('email').value;
      const newRol = document.getElementById('roles').value;
      const newPassword = document.getElementById('password').value;
      const body = {
        email : newEmail,
        password : newPassword,
        roles : { admin : (newRol === 'admin') }
      }
      console.log(body);
      if(button.textContent === 'Save changes'){
        //-------------------------UPDATE USER------------------------------//
        const resp = await updateUserByKeyword(dataToPut.email, body);
        console.log(resp);
      } else {  
        //-------------------------POST NEW USER------------------------------//
        await postbyKeyword(body);
      }
    };
 //-------------------------DELETE USER------------------------------//
  const deleteBy = async (data) => {
    await deletebyKeyword(data._id);
  }
        return (
          <div className="users">
              <div className="containertop">
              <img src="https://raw.githubusercontent.com/paula113/LIM012-fe-burger-queen-api-client/e60c452ad793ea90d9e698f0fef3d6d190862ce8/src/assests/istockphoto-1049751988-612x612-removebg-preview%201.svg" alt="" />

            <form className="form" onSubmit={(e) => userSubmit(e)}>
            {/* {!!(newuser.email && newuser.password) ? <strong>Add Employee {newuser.email}</strong> : 'Please type emloyee email, password and role'} */}
              <input placeholder="Email" id="email" type="email" name="email"  />
              <input placeholder="Password" id="password" name="password" type="password" minLength={6} />
              <select name="roles" id="roles">
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
