import { url } from './url';

const getToken = async (email, password) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  };
  // return fetch(`${url}/auth`, requestOptions)
  //   .then((resp) => {
  //     switch (resp.status) {
  //       case 200:
  //         return resp.json();
  //       case 400:
  //         return Promise.reject(new Error('Insert email and password'));
  //       case 404:
  //         return Promise.reject(new Error('Invalid user or password'));
  //       default:
  //         return Promise.reject(new Error(resp.statusText));
  //     }
  //   });
  const data = await fetch(`${url}/auth`, requestOptions)
  switch (data.status) {
          case 200:
            const dataJson = await data.json();
            return dataJson;
          case 400:
            throw new Error('Insert email and password');
          case 404:
            throw new Error('Invalid user or password');
          default:
            throw new Error(data.statusText);
        }

};
export { getToken };
