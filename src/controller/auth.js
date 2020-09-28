import { url } from './url';

const getToken = async (email, password) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  };
  const data = await fetch(`${url}/auth`, requestOptions);
  const dataJson = await data.json();
  switch (data.status) {
    case 200:
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
