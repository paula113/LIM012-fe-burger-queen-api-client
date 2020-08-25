import React, { useState, useEffect } from 'react';
import './Users.scss';
import Table from '../../Components/Table';
import Pagination from '../../Components/Pagination';
import SearchBar from '../../Components/searchBar';
import { 
  getAllData,
  getData,
  getByKeyword,
  postbyKeyword,
  deletebyKeyword,
  updateByKeyword,
 } from '../../controller/crud';

const Users = () => {

  const table= {head:['id', 'Email', 'Rol'], type: 'users'};
  const initPage = { current: 1 , total: 1};
  //-------------------------STATE------------------------------//
  const [users, setUsers] = useState([]);
  const [dataToPut, setDataToPut] = useState({});
  const [allData, setAllData] = useState([]);
  const [page, setPage] = useState(initPage);
/**
 * infinito render 
 * asincronia del test
 */

//-------------------------GET USER------------------------------//
    useEffect(() => {
      // async function fetchUser(){
      //   const userData = await getUsers(page);
      //   setUsers(userData)
      // }
      //   fetchUser();
      (async ()=> {
        try{
          console.log('use efect');
          const dataJson = await getData(page.current,'users');
          const userData = dataJson.map((data) => {
            data.roles = (data.roles.admin) ? 'admin' : 'service';
            return data;
          });
           setUsers(userData);
          ////-------
          
          const allUsers = await getAllData('users');
          setAllData(allUsers);
          setPage(page => ({ ...page, total: Math.ceil((allUsers.length)/5) }));
          ////-------
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
        await updateByKeyword(dataToPut.email, body,'users');
        document.getElementById('submitProduct').textContent = 'Add User';
      } else {  
        //-------------------------POST NEW USER------------------------------//
        await postbyKeyword(body,'users');
        window.alert('añadido con exito');
      }
    };
 //-------------------------DELETE USER------------------------------//
  const deleteBy = async (data) => await deletebyKeyword(data._id,'users');

const searchUserBy = async (e) =>{
  e.preventDefault();
  const input = document.querySelector('div.search-box input[placeholder="Search employee"]').value;
  const validateInput = allData.find((user) =>  ( input === user.email  || input === user._id ));
  if (validateInput) { 
  const data = await getByKeyword(input, 'users');
  data.roles = (data.roles.admin) ? 'admin' : 'service';
  const array = [data];
  setUsers(array);
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
            <SearchBar arrayData={allData} searchUserBy={searchUserBy} table='users'/>
            <Table table={table} arrayData={users} putData={putData} deleteBy={deleteBy}/>
            <Pagination page={page }currentPage= {currentPage}/>
          </div>
        );
};

export default Users;
