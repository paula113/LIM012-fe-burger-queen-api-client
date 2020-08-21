import { url } from './url';

const getToken = (email, password) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  };
  return fetch(`${url}/auth`, requestOptions)
    .then((resp) => {
      switch (resp.status) {
        case 200:
          return resp.json();
        case 400:
          return Promise.reject(new Error('Insert email and password'));
        case 404:
          return Promise.reject(new Error('Invalid user or password'));
        default:
          return Promise.reject(new Error(resp.statusText));
      }
    });
};
export default { getToken };
