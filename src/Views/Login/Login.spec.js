import React from 'react';

// import { render, screen, renderWithRouter } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { createMemoryHistory } from 'history'
import { render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Login from './Login';
import App from '../../App';
// mock :
const server = setupServer(
  rest.post('http://134.122.82.187:8000/auth', (req, res, ctx) => {
    return res(ctx.json({token: 'fake_user_token'}))
  }),
)

beforeAll(() => {
  return server.listen()
})
afterEach(() => {
  server.resetHandlers()
  localStorage.removeItem('token')
})
afterAll(() => server.close())

//-------------------
describe('Login', () => {
  it('Debería mostrar el login iniciarse', () => {
    //renderWithRouter(<Login />);
  // const history = createMemoryHistory()
  // const { container, getByText } = render(
  //   <Router history={history}>
  //     <Login />
  //   </Router>
  // )
  const { container, getByText } = render(<App/>);
  expect(getByText('Burger Queen')).toBeInTheDocument();
  expect(container.firstChild).toHaveClass('login');
  });

  it('Al autentificarse correctamente deberia direccionar a home', async() => {
    // const history = createMemoryHistory()
    // const { container, getByText } = render(
    //   <Router history={history}>
    //     <Login />
    //   </Router>
    // )
    const { container, getByText } = render(<App/>);
    fireEvent.change(screen.getByPlaceholderText('email'), {
      target: {value: 'admin@localhost.host'},
    })
    fireEvent.change(screen.getByPlaceholderText('password'), {
      target: {value: 'changeme'},
    })
    fireEvent.click(screen.getByText(/Login/i));

  // .toHaveTextContent() comes from jest-dom's assertions
  // otherwise you could use expect(alert.textContent).toMatch(/congrats/i)
  // but jest-dom will give you better error messages which is why it's recommended
    await localStorage.getItem('token');
    //expect(token).toEqual('fake_user_token');
    // expect(getByText('User')).toBeInTheDocument();
    await screen.findByText(/Add user/i);
    expect(getByText(/Add user/i)).toBeInTheDocument();
    console.log(container.innerHTML);
    console.log(container.firstChild.classList);
    expect(container.firstChild.classList.contains('users')).toBe(true)
    //expect(container.firstChild).toHaveClass('users');
    
  });

  it('Si no coloca email o password debería mostrar error; "Insert email and password"', () => {

  });

  it('Si no hay token deberia mostar un mensaje de error: Invalid user or password', () => {

  });
  /* it('debería mostrar siguiente pantalla al hacer click', () => {
    const { getByText } = render(<App />);
    const el = getByText(data[0].text);

    userEvent.click(el);

    expect(getByText(data[1].text)).toBeInTheDocument();
  }); */
});
