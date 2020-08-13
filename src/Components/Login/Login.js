/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import './Login.scss';
// eslint-disable-next-line react/prefer-stateless-function
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      roles: 'admin',
      // rolesAdmin: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginSubmit = this.loginSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  loginSubmit(event) {
    const { roles, email, password } = this.state;
    console.log(roles);
    console.log(email);
    console.log(password);
    event.preventDefault();
  }

  render() {
    const {
      roles, email, password,
    } = this.state;
    // const error = (rolesAdmin) ? '' : 'no esta autorizado';
    return (
      <div>
        <h1>
          Burger Queen
        </h1>
        <body>
          <img alt="" src="https://github.com/paula113/LIM012-fe-burger-queen-api-client/blob/master/src/assests/Vectorburger.svg"/>
          {/* enviamos informacion de todo el form */}
          <form onSubmit={this.loginSubmit}>
            <input type="text" name="email" placeholder="email" value={email} onChange={this.handleChange} />
            <input type="password" name="password" placeholder="password" value={password} onChange={this.handleChange} />

            <label htmlFor="roles">
              Choose your role:
              {/* valor del select y con loginChange cambiamos el estado */}
              <select name="roles" value={roles} onChange={this.handleChange}>
                <option value="admin">Administration</option>
                <option value="service">Service</option>
              </select>
            </label>

            <p id="error">
              error
            </p>
            <button type="submit" value="Login" >Login</button>
            {/* <input class="sub" type="submit" value="Login" /> */}
          </form>
        </body>
      </div>
    );
  }
}
