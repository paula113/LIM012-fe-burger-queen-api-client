import React, { useState, useEffect } from 'react';
import './Users.scss';
import { useForm } from 'react-hook-form';
import Table from '../../Components/Table';
import Pagination from '../../Components/Pagination';
// import fetchState from '../../Utils/customHooks';
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
  const table = { head: ['id', 'Email', 'Rol'], type: 'users' };
  const initPage = { current: 1, total: 1 };
  const initUser = {
    email: '',
    password: '',
    roles: { admin: 'service' },
  };
  // -------------------------STATE------------------------------//
  const [users, setUsers] = useState([]);
  const [dataToPut, setDataToPut] = useState({});
  const [updateIcon, setUpdateIcon] = useState(false);
  const [allData, setAllData] = useState([]);
  const [page, setPage] = useState(initPage);
  const [display, setDisplay] = useState({});
  const [userDetails, setUserDetails] = useState({});
  const { register, errors, handleSubmit } = useForm();

  // const [query, setQuery] = useState(false);
  // -------------------------GET USER------------------------------//
  useEffect(() => {
    console.log('use effect render!');
    getAllData('users').then((Totalusers) => setPage((pages) => ({ ...pages, total: Math.ceil((Totalusers.length) / 5) })))
      .catch((e) => console.log(e.message));
    getData(page.current, 'users')
      .then((dataJson) => dataJson.reverse().map((element) => (element.roles.admin ? { ...element, roles: 'admin' } : { ...element, roles: 'service' })))
      .then((usersJson) => {
        console.log(usersJson);
        setUsers(usersJson);
      })
      .catch((e) => {
        if (e.message === 'No page found') {
          console.log(e.message);
          // const prevPage = page.current - 1;
          // const dataJson = await getData(prevPage, 'users');
          // const userData = dataJson.map((data) => {
          //   data.roles = (data.roles.admin) ? 'admin' : 'service';
          //   return data;
          // });
          // setUsers(userData);
          // setPage({ current: prevPage, total: page.total - 1 });
        }
      });
  }, [page.current]);
  // PAGINATION;
  // const prev = () => {
  //   const prevPage = (page === 0) ? 1 : Number(page) - 1;
  //   setPage(prevPage);
  // };
  // const next = () => {
  //   const nextPage = (page === 0) ? 1 : Number(page) + 1;
  //   setPage(nextPage);
  // };
  // const currentPage = (thisPage) => setPage((newPage) => ({ ...newPage, current: thisPage }));
  // -------------------------UPDATE USER------------------------------//

  function putData(data) {
    console.log(data);
    document.getElementById('email').value = data.email;
    document.getElementById('submitUser').textContent = 'Save changes';
    setDataToPut(data);
    // setQuery(true)
  }
  const onSubmit = (userData) => {
    const { userEmail, userPassword, userRoles } = userData;
    const body = {
      email: userEmail,
      password: userPassword,
      roles: { admin: (userRoles === 'admin') },
    };
    if (!updateIcon) {
      postbyKeyword(body, 'users')
        .then((resp) => {
          users.push(resp);
        })// add to users
        .catch((e) => { console.log(e); });// show on inteface
    }
  };
  // -------------------------DELETE USER------------------------------//
  const deleteBy = async (data) => {
    await deletebyKeyword(data._id, 'users');
    // setQuery(!query);
  };

  const searchUserBy = async (e) => {
    e.preventDefault();
    const input = document.querySelector('div.search-box input[placeholder="Search employee"]').value;
    const validateInput = allData.find((user) => (input === user.email || input === user._id));
    if (validateInput) {
      const data = await getByKeyword(input, 'users');
      data.roles = (data.roles.admin) ? 'admin' : 'service';
      const array = [data];
      setUsers(array);
      // setQuery(true)
    } else {
      // setQuery(!query);
    }
  };
  return (
    <div className="users">
      <div className="containertop">
        <img src="https://raw.githubusercontent.com/paula113/LIM012-fe-burger-queen-api-client/e60c452ad793ea90d9e698f0fef3d6d190862ce8/src/assests/istockphoto-1049751988-612x612-removebg-preview%201.svg" alt="" />
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          {(display.email) ? (
            <strong>
              {display.email}
              {' '}
              successfully added
            </strong>
          ) : null}
          <input
            placeholder="Email"
            id="userEmail"
            // value={userDetails.email}
            type="email"
            name="userEmail"
            ref={register({
              required: {
                value: true,
                message: 'Email es requerido',
              },
            })}
          />
          {errors.userEmail
                && (
                <span>
                  {errors.userEmail.message}
                </span>
                )}
          <input
            placeholder="Password"
            // value={userDetails.password}
            id="userPassword"
            name="userPassword"
            type="password"
            ref={register({
              required: {
                value: true,
                message: 'Password es requerido',
              },
              minLength: {
                value: 6,
                message: 'Mínimo 4 carácteres',
              },
            })}
          />
          {errors.userPassword
                && (
                <span>
                  {errors.userPassword.message}
                </span>
                )}
          <select
            name="userRoles"
            id="roles"
            ref={register}
          >
            <option value="service">Service</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit" id="submitUser">Submit</button>
        </form>
      </div>
      <SearchBar arrayData={allData} searchUserBy={searchUserBy} table="users" />
      <Table
        table={table}
        arrayData={users}
        putData={putData}
        deleteBy={deleteBy}
        setUpdateIcon={setUpdateIcon}
      />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default Users;
