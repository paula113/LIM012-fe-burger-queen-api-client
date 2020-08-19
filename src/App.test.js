/* import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('debería mostrar el login iniciarse', () => {
     const { getByText } = render(<App />);
    const el = getByText(data[0].text);
    expect(el.style.color).toBe('rgb(255, 255, 255)');
    expect(el).toBeInTheDocument();
  });
    it('debería mostrar siguiente pantalla al hacer click', () => {
    const { getByText } = render(<App />);
    const el = getByText(data[0].text);

    userEvent.click(el);

    expect(getByText(data[1].text)).toBeInTheDocument();
  });
}); */
