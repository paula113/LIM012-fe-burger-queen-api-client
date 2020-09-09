// import { render, screen, renderWithRouter } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import {
  render, fireEvent, screen, renderWithRouter,
} from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import Products from './Products';
import { url } from '../../controller/url';
// import { getProductsMock, postProductMock, getAllProductsMock } from './__mocks__/Products';

// mock :
const server = setupServer(
  rest.get(`${url}/products`, async (req, res, ctx) => {
    const resp = await res(ctx.json([{
      _id: '01',
      name: 'Hamburguesa mock',
      price: 10,
      image: 'image-hamburguesa.jpg',
      type: 'hamburguesa',
      dateEntry: '09/09/2020',
    }]));
    console.log(resp.body);
    return resp;
    // return resp;
  }),
);
// beforeAll(() => server.listen());

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));
//-------------------
describe('Products', () => {
  it('Debería encontrarse el boton de añadir producto', () => {
    const { container, getByText } = render(<Products />);
    expect(getByText('Add Product')).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('products');
  });

  it('Al tipear el email y contraseña debe cambiarse el estado', async () => {
    act(() => server.listen());
    // act(() => getAllProductsMock());
    // await getAllProductsMock(200);
    const { getByPlaceholderText, getByTestId } = render(<Products />);
    screen.debug();
    act(() => {
      fireEvent.change(screen.getByPlaceholderText('Name'), {
        target: { value: 'Hamburguesa grande' },
      });
      fireEvent.change(screen.getByPlaceholderText('Price'), {
        target: { value: '15' },
      });
      fireEvent.change(screen.getByPlaceholderText("Insert url's image"), {
        target: { value: 'hamburguesa-grande-image.jpg' },
      });
      fireEvent.change(screen.getByTestId('select'), {
        target: { value: 'hamburguesa' },
      });
    });

    const name = getByPlaceholderText('Name').value;
    const price = getByPlaceholderText('Price').value;
    const image = getByPlaceholderText("Insert url's image").value;
    const type = getByTestId('select').value;
    // // const body = {
    // //   name,
    // //   price,
    // //   image,
    // //   type,
    // // };
    // // postProductMock(200, body);
    // expect(name).toEqual('Hamburguesa grande');
    // expect(price).toEqual('15');
    // expect(image).toEqual('hamburguesa-grande-image.jpg');
    // expect(type).toEqual('hamburguesa');
    // // await act(async () => {
    // //   await fireEvent.click(screen.getByText(/Add Product/i));
    // // });
    // // expect(type).toEqual('hamburguesa');
  });
});
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
