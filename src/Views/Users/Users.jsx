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
  const table = { head: ['', 'id', 'Email', 'Rol'], type: 'users' };
  const initPage = { current: 1, total: 1 };
  const initUser = {
    email: '',
    password: '',
    roles: { admin: 'service' },
  };
  // -------------------------STATE------------------------------//
  const [users, setUsers] = useState([]);
  const [dataToPut, setDataToPut] = useState({});
  // const [updateIcon, setUpdateIcon] = useState(false);
  const [allData, setAllData] = useState([]);
  const [page, setPage] = useState(initPage);
  const [displayPagination, setDisplayPagination] = useState(true);
  const [userDetails, setUserDetails] = useState({});
  const { register, errors, handleSubmit } = useForm();

  // -------------------------GET USER------------------------------//
  useEffect(() => {
    console.log('use effect render!');
    getAllData('users').then((allUsersData) => {
      setPage((pages) => ({ ...pages, total: Math.ceil((allUsersData.length) / 5) }));
      return setAllData(allUsersData);
    })
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
    return () => {
      console.log('clean up');
    };
  }, [page.current]);

  const putData = (data) => setDataToPut(data);

  const onSubmit = (userData) => {
    const { userEmail, userPassword, userRoles } = userData;
    const body = {
      email: userEmail,
      password: userPassword,
      roles: { admin: (userRoles === 'admin') },
    };
    if (dataToPut) {
      updateByKeyword(dataToPut._id, body, 'users')
        .then((resp) => {
          console.log(resp);
          setPage((pages) => ({ ...pages, current: (page.current) })); // Should re render
          setDataToPut(() => ({
            ...initUser,
          }));
          setUserDetails(() => ({
            ...initUser,
          }));
        })
        .catch((err) => console.log(err));
    } else {
      postbyKeyword(body, 'users')
        .then(() => ((page.current !== page.total)
          ? setPage((pages) => ({ ...pages, current: (page.total) }))
          : console.log(page.current, page.total)))
        .catch((e) => { console.log(e); });// show on inteface
    }
  };
  // -------------------------DELETE USER------------------------------//
  const deleteBy = (data) => {
    deletebyKeyword(data._id, 'users').then(() => {
      setPage((pages) => ({ ...pages, current: (page.current) }));
    });
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
          {(dataToPut.email) ? (
            <h3>
              Edit
              {' '}
              {dataToPut.roles}
              {'  '}
              {dataToPut.email}
            </h3>
          ) : null}
          <input
            placeholder="Email"
            id="userEmail"
            defaultValue={userDetails.email ? dataToPut.email : userDetails.email}
            type="email"
            name="userEmail"
            ref={register({
              required: {
                // value: true,
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
            // defaultValue={dataToPut.password ? dataToPut.password : ''}
            id="userPassword"
            name="userPassword"
            type="password"
            ref={register({
              required: {
                // value: true,
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
      <SearchBar
        allData={allData}
        searchUserBy={searchUserBy}
        setDisplayPagination={setDisplayPagination}
        table="users"
      />
      <Table
        table={table}
        arrayData={users}
        putData={putData}
        deleteBy={deleteBy}
        // setUpdateIcon={setUpdateIcon}
      />
      {
        displayPagination
          ? <Pagination page={page} setPage={setPage} />
          : null
      }
    </div>
  );
};

export default Users;
