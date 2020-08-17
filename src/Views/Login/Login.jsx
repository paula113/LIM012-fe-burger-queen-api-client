/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import './Login.scss';
// eslint-disable-next-line react/prefer-stateless-function
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      // isLogin: false,
      // isAdmin: true,
      // rolesAdmin: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginSubmit = this.loginSubmit.bind(this);
  }

  /* componentDidMount() {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.email,
      }),
    };

    fetch('http://142.93.138.137:8080/auth', requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
      verificar si esta logueado
  } */

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  loginSubmit(event) {
    // cambiar segun fetch
    this.setState({
      // isLogin: true,
    });
    event.preventDefault();
  }

  render() {
    const { email, password } = this.state;
    // const error = (rolesAdmin) ? '' : 'no esta autorizado';
    return (
      <div id="login">
        <h1>
          Burger Queen
        </h1>
        <body>
          <img alt="" src="https://raw.githubusercontent.com/paula113/LIM012-fe-burger-queen-api-client/bd2da1a0fc4e35daafdb4d20d19a2c03b9610ebe/src/assests/Vectorburger.svg" />
          {/* enviamos informacion de todo el form */}
          <form onSubmit={this.loginSubmit}>
            <input type="text" name="email" placeholder="email" value={email} onChange={this.handleChange} />
            <input type="password" name="password" placeholder="password" value={password} onChange={this.handleChange} />

            <p id="error">
              error
            </p>
            <button type="submit" value="Login">Login</button>
            {/* <input class="sub" type="submit" value="Login" /> */}
          </form>
        </body>
      </div>
    );
  }
}
