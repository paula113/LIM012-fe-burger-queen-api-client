/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import './Login.scss';
import { getToken } from '../../controller/Auth_controller';

const loginSubmit = (event, email, password) => {
  console.log('submit');
  getToken(email, password).then((res) => {
    console.log('dentro de get token');
    const { token } = res;
    localStorage.setItem('token', token);
    // guarda token en EL STORAGE
  });
  console.log('fuera de la promesa');
  event.preventDefault();
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div id="login">
      <h1>
        Burger Queen
      </h1>
      <div className="body">
        <img alt="" src="https://raw.githubusercontent.com/paula113/LIM012-fe-burger-queen-api-client/bd2da1a0fc4e35daafdb4d20d19a2c03b9610ebe/src/assests/Vectorburger.svg" />
        {/* enviamos informacion de todo el form */}
        <form onSubmit={(event) => loginSubmit(event, email, password)}>
          <input type="text" name="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <p id="error">
            error
          </p>
          <button type="submit" value="Login">Login</button>
          {/* <input class="sub" type="submit" value="Login" /> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
