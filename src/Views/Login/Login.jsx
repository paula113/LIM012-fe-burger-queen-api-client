/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
//import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './Login.scss';
import { getToken } from '../../controller/auth';
import Vectorburger from '../../assests/Vectorburger.svg'

const Login = (prop) => {
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginSubmit = (event) => {
    event.preventDefault();
    console.log(email);
    getToken(email, password).then((res) => {
      const { token } = res;
      localStorage.setItem('token', token);
      console.log(token);
      history.push('/home');
    }, (error) => {
      document.getElementById('error').textContent = error;
    });
      // try{
      //   console.log('2');
      //   const { token } = await getToken(email, password);
      //   console.log('3');
      //   console.log(token);
      //   localStorage.setItem('token', token);
      //   console.log('4');
      //   history.push('/home');
      //   console.log('5');
      // }catch(error){
      //   document.getElementById('error').textContent = error;
      //  }
  };
  return (
    <div className="login">
      <h1>
        Burger Queen
      </h1>
      <div id="login-form" className="body">
        {/* src/assests/Vectorburger.svg */}
        <img src={Vectorburger} alt=""/>
        {/* enviamos informacion de todo el form */}
        <form onSubmit={(event) => loginSubmit(event)}>
          <input type="text" name="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <p id="error" />
          <button type="submit" value="Login">Login</button>
          {/* <input class="sub" type="submit" value="Login" /> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
