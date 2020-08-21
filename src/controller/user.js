import { url } from './url';
import Users from '../Views/Users/Users';

const getUsers = (token) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  return fetch(`${url}/users`, requestOptions);
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

const updateUserByKeyword = (token, keyword, body) => {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };
  return fetch(`${url}:8000/users/${keyword}`, requestOptions);
};

export {
  getUsers,
  getUserByKeyword,
  updateUserByKeyword,
};
