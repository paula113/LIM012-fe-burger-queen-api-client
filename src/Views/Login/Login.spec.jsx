import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

describe('Login', () => {
  it('debería mostrar el login iniciarse', () => {
    // const { getByText } = render(<Login />);
    // const el = getByText(data[0].text);
    render(<Login />);
    const el = screen.getByTestId('custom-element');
    // expect(el.style.color).toBe('rgb(255, 255, 255)');
    console.log(el);
    // expect(el).toBeInTheDocument();
  });
  /* it('debería mostrar siguiente pantalla al hacer click', () => {
    const { getByText } = render(<App />);
    const el = getByText(data[0].text);

    userEvent.click(el);

    expect(getByText(data[1].text)).toBeInTheDocument();
  }); */
});
