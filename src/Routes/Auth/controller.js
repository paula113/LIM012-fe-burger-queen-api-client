const getToken = (email, password) => {

    const requestOptions = {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'email': email, 'password': password })
      };
      console.log(requestOptions.body);
    return fetch('http://142.93.138.137:8080/auth', requestOptions)
};

export { getToken }