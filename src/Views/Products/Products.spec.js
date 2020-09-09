// import { render, screen, renderWithRouter } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import React from "react";
import { MemoryRouter } from 'react-router-dom'
import { render, fireEvent, screen, renderWithRouter } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Products from './Products'
import { act } from "react-dom/test-utils";

const getDataMock = (status) => {
      global.fetch = jest.fn(() => Promise.resolve({
        status,
        json: () =>  Promise.resolve([{
            "name": "Hamburguesa mock",
            "price": 10,
            "image": "image-hamburguesa.jpg",
            "type": "hamburguesa"
        },
        {
            "name": "Gaseosa mock",
            "price": 5,
            "image": "image-gaseosa.jpg",
            "type": "acompañamiento"
        },
    ]),
      }));
}

const postDataMock = (status, body) => {
    global.fetch = jest.fn(() => Promise.resolve({
      status,
      json: () =>  Promise.resolve(body),
    }));
}

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  })
}));
//-------------------
describe('Products', () => {
  it('Debería encontrarse el boton de añadir producto', () => {
  const { container, getByText } = render(<Products/>);
  expect(getByText('Add Product')).toBeInTheDocument();
  expect(container.firstChild).toHaveClass('products');
  });

  it('Al tipear el email y contraseña debe cambiarse el estado', () =>{
    const { getByPlaceholderText } = render(<Products />)
    act(() => {
      fireEvent.change(screen.getByPlaceholderText('Name'), {
        target: { value: 'Hamburguesa grande' },
      });
      fireEvent.change(screen.getByPlaceholderText('Price'), {
        target: { value: 15 },
      });
    });
    expect( getByPlaceholderText('Name').value).toEqual('Hamburguesa grande');
    const name = getByPlaceholderText('Name').value;
    const price = getByPlaceholderText('Price').value;
  });
})
  
//   it('Si no coloca email o password debería mostrar error; "Insert email and password"', async() => {
//     mockStatus(400);
//     const { getByText } =  render(<Login />);
//     await act(async () => {
//       await fireEvent.click(screen.getByText(/Login/i));
//     });
//     expect(getByText('Error: Insert email and password')).toBeInTheDocument();
//   });
//   it('Si no hay token deberia mostar un mensaje de error: Invalid user or password', async () => {
//     mockStatus(404);
//     const { getByText } =  render(<Login />);
//     await act(async () => {
//       await fireEvent.click(screen.getByText(/Login/i));
//     });
//     expect(getByText('Error: Invalid user or password')).toBeInTheDocument();
//   });
// });