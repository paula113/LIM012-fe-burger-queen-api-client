import { url } from './url';

const getUsers = async (token) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  const data = await fetch(`${url}/users`, requestOptions);
  const dataJson = await data.json();
  const users = dataJson.map((data) => {
    data.roles = (data.roles.admin) ? 'admin' : 'service';
    return data;
  });
  return users;
};

const getUserByKeyword = (token, keyword) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  return fetch(`${url}/users/${keyword}`, requestOptions);
};

const postbyKeyword = async (body) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(body),
  };
 const data = await fetch(`${url}/users`, requestOptions);
 const dataJson = await data.json();
 return dataJson
};

const updateUserByKeyword = async (token,keyword , body) => {
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  };
  const data = await fetch(`${url}/users/${keyword}`, requestOptions)
  const dataJson = await data.json();
  return dataJson;
};

export {
  getUsers,
  getUserByKeyword,
  postbyKeyword,
  updateUserByKeyword,
};
