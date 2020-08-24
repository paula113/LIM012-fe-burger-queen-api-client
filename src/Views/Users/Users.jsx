import React, { useState, useEffect } from 'react';
import './Users.scss';
import Table from '../../Components/Table';
import Pagination from '../../Components/Pagination';
import { sizeData } from '../../controller/url';
import SearchBar from '../../Components/searchBar';
import { getUsers, postbyKeyword, 
  getUserByKeyword,
  updateUserByKeyword, deletebyKeyword
 } from '../../controller/user';

const Users = () => {
  //-------------------------STATE------------------------------//
  const [users, setUsers] = useState([]);
  const [dataToPut, setDataToPut] = useState({});
  const headTable= ['id', 'Email', 'Rol'];
  const initPage = { current: 1 , total: 1};
  const [page, setPage] = useState(initPage);
//-------------------------GET USER------------------------------//
    useEffect(() => {
      // async function fetchUser(){
      //   const userData = await getUsers(page);
      //   setUsers(userData)
      // }
      //   fetchUser();
      (async ()=> {
        try{
          const userData = await getUsers(page.current);
          setUsers(userData);
          const size = await sizeData('users');
          setPage(page => ({ ...page, total: Math.ceil((size)/5) }));

        }catch(e){
          console.log(`Error: ${e}`);
         }
      })()
      
    },[users]);
// PAGINATION
  //  const prev = () => {
  //    const prevPage = (page===0)? 1 :parseInt(page) -1;
  //    setPage(prevPage);
  //  } 
  //  const next = () => {
  //   const nextPage = (page===0)? 1 :parseInt(page) +1;
  //    setPage(nextPage);
  // } 
  const currentPage = (thisPage) => {
    setPage(page => ({...page, current: thisPage}));
  }
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
        window.alert('añadido con exito');
      }
    };
 //-------------------------DELETE USER------------------------------//
  const deleteBy = async (data) => await deletebyKeyword(data._id);

const searchUserBy = async (e) =>{
  e.preventDefault();
  const input = document.querySelector('div.search-box input[placeholder="Search employee"]').value;
  const validateInput = users.find((user) =>  ( input === user.email  || input === user._id ));
  if (validateInput) { 
  const resp = await getUserByKeyword(input);
console.log(resp);
  }
  };

        return (
          <div className="users">
              <div className="containertop">
              <img src="https://raw.githubusercontent.com/paula113/LIM012-fe-burger-queen-api-client/e60c452ad793ea90d9e698f0fef3d6d190862ce8/src/assests/istockphoto-1049751988-612x612-removebg-preview%201.svg" alt="" />

            <form className="form" onSubmit={(e) => userSubmit(e)}>
              <input placeholder="Email" id="email" type="email" name="email"  />
              <input placeholder="Password" id="password" name="password" type="password" minLength={6} />
              <select name="roles" id="roles">
                <option value='service'>Service</option>
                <option value='admin'>Admin</option>
              </select>
              <button type="submit" id="submitUser">Add user</button>
            </form>
            </div>
            <SearchBar arrayData={users} searchUserBy={searchUserBy}/>
            <Table head={headTable} arrayData={users} putData={putData} deleteBy={deleteBy} page={page}/>
            <Pagination page={page }currentPage= {currentPage}/>
          </div>
        );
};

export default Users;
