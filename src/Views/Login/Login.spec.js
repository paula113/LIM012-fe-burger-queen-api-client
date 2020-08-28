
// import { render, screen, renderWithRouter } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import React from "react";
import { MemoryRouter } from 'react-router-dom'
import { render, fireEvent, screen, renderWithRouter } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Login from './Login';
import { act } from "react-dom/test-utils";
// mock :
// const server =  setupServer(
//   rest.post(`${url}/auth`, async (req, res, ctx) => {
//     const resp = await res(ctx.json({token: 'fake_user_token'}));
//     console.log(resp.body);
//     return resp;
//     //return resp;
//   }),
// )
const mockStatus= (status) => {
      global.fetch = jest.fn(() => Promise.resolve({
        status,
        json: () =>  Promise.resolve({
            token: 'fake_user_token'
        }),
      }));
}

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  })
}));

// beforeAll(() => 
//   //return server.listen();
//   //fetch.mockClear()
// );
afterEach(() => {
//   server.resetHandlers();
  localStorage.removeItem('token');
})
// afterAll(() => {server.close()});
//-------------------
describe('Login', () => {
  it('Debería mostrar el login iniciarse', () => {
  const { container, getByText } = render(<Login/>);
  expect(getByText('Burger Queen')).toBeInTheDocument();
  expect(container.firstChild).toHaveClass('login');
  });
  
  it('Al tipear el email y contraseña debe cambiarse el estado', () =>{
    const { getByPlaceholderText } = render(<Login />)
    act(() => {
      fireEvent.change(screen.getByPlaceholderText('email'), {
        target: { value: 'admin@localhost.host' },
      });
    });
    act(() => {
      fireEvent.change(screen.getByPlaceholderText('password'), {
        target: { value: 'changeme' },
      });
    });
    expect( getByPlaceholderText('email').value).toEqual('admin@localhost.host');
    expect( getByPlaceholderText('password').value).toEqual('changeme');
  });

  it('Al autentificarse correctamente deberia guardar el token', async() => {
      mockStatus(200);
      render(<Login />);
      await act(async () => {
        await fireEvent.click(screen.getByText(/Login/i));
      });
      expect(localStorage.getItem('token')).toEqual('fake_user_token');
  });

  it('Al autentificarse correctamente deberia cambiar a la ruta home', async() => {
    render(<MemoryRouter>
             <Login />
           </MemoryRouter>)
    await act(async () => {
      await fireEvent.click(screen.getByText(/Login/i));
    });
    expect(mockHistoryPush).toHaveBeenCalledWith('/home');
  });
  
  
  it('Si no coloca email o password debería mostrar error; "Insert email and password"', async() => {
    mockStatus(400);
    const { getByText } =  render(<Login />);
    await act(async () => {
      await fireEvent.click(screen.getByText(/Login/i));
    });
    expect(getByText('Error: Insert email and password')).toBeInTheDocument();
  });
  it('Si no hay token deberia mostar un mensaje de error: Invalid user or password', async () => {
    mockStatus(404);
    const { getByText } =  render(<Login />);
    await act(async () => {
      await fireEvent.click(screen.getByText(/Login/i));
    });
    expect(getByText('Error: Invalid user or password')).toBeInTheDocument();
  });
});