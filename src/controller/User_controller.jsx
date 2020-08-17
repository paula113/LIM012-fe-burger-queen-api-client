const getUsers = (token) => {
  const requestOptions = {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  return fetch('http://142.93.138.137:8080/auth', requestOptions);
};
export {
  getUsers,
};
