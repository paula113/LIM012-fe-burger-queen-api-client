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

const getUserByKeyword = async (keyword) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  const data = await fetch(`${url}/users/${keyword}`, requestOptions);
  const dataJson = await data.json();
  return dataJson;
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

const deletebyKeyword = async (keyword) => {
  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
 const data = await fetch(`${url}/users/${keyword}`, requestOptions);
 const dataJson = await data.json();
 return dataJson
};


const updateUserByKeyword = async (keyword , body) => {
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(body),
  };
  const data = await fetch(`${url}/users/${keyword}`, requestOptions)
  console.log(data);
  console.log(data.status);
  switch (data.status) {
    case 200:
      const dataJson = await data.json();
      return dataJson;
    case 403:
      console.log('error ')
      break;
    default:
      return new Error(data.statusText);
  }
};

export {
  getUsers,
  getUserByKeyword,
  postbyKeyword,
  deletebyKeyword,
  updateUserByKeyword,
};
