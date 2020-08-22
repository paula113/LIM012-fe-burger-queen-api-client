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

const postbyKeyword = (token, body) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${body}`,
    },
    body: JSON.stringify(body),
  };
  return fetch(`${url}/users`, requestOptions)
    .then((resp) => {
      resp.json();
    });
};

const updateUserByKeyword = (token, keyword, body) => {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };
  return fetch(`${url}:8000/users/${keyword}`, requestOptions)
  .then((resp) => {
    resp.json();
  });
};

export {
  getUsers,
  getUserByKeyword,
  postbyKeyword,
  updateUserByKeyword,
};
