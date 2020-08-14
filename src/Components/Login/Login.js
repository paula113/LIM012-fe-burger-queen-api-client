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
      roles: 'admin',
      // rolesAdmin: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginSubmit = this.loginSubmit.bind(this);
  }

  componentDidMount() {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'admin@localhost.host',
        password: 'changeme',
      }),
    };

    fetch('142.93.138.137:8080/auth', requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
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
          <img alt="" />
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
            <input type="submit" value="Login" />
          </form>
        </body>
      </div>
    );
  }
}
