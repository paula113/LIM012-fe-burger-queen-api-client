const getToken = (email, password) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  };
  console.log(requestOptions.body);
  return fetch('http://142.93.138.137:8080/auth', requestOptions)
    .then((resp) => {
      switch (resp.status) {
        case 200:
          return resp.json();
        case 400:
          return Promise.reject(new Error('Insert email and password'));
        case 401:
          return Promise.reject(new Error('Invalid user'));
        default:
          return Promise.reject(new Error(resp.statusText));
      }
    });
};
export { getToken };
