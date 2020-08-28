import { url } from './url';

const getAllData = async (table) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  const data = await fetch(`${url}/${table}`, requestOptions);
  const dataJson = await data.json();
  return dataJson;
}

const getData = async (page, table) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  const data = await fetch(`${url}/${table}?page=${page}&limit=5`, requestOptions);
  switch (data.status) {
    case 200:
      const dataJson = await data.json();
    return dataJson;
    // case 404:
    //   throw new Error('No page found');
     default:
      throw new Error(data.statusText);
  }
  
};

const getByKeyword = async (keyword, table) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  const data = await fetch(`${url}/${table}/${keyword}`, requestOptions);
  // const dataJson = await data.json();
  // return dataJson;
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

const postbyKeyword = async (body, table) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(body),
  };
 const data = await fetch(`${url}/${table}`, requestOptions);
//  const dataJson = await data.json();
//  return dataJson
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

const deletebyKeyword = async (keyword, table) => {
  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
 const data = await fetch(`${url}/${table}/${keyword}`, requestOptions);
//  const dataJson = await data.json();
//  return dataJson
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


const updateByKeyword = async (keyword , body, table) => {
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(body),
  };
  console.log('uodate 1');
  const data = await fetch(`${url}/${table}/${keyword}`, requestOptions);
  console.log('uodate');
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
  getAllData,
  getData,
  getByKeyword,
  postbyKeyword,
  deletebyKeyword,
  updateByKeyword,
};
