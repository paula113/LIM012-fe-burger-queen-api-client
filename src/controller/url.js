const url = 'http://134.122.82.187:8000';
//const url = 'http://142.93.138.137:8080';

const sizeData = async (table) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  const data = await fetch(`${url}/${table}`, requestOptions);
  const dataJson = await data.json();
  return dataJson.length;
}
export {
  url,
  sizeData,
};