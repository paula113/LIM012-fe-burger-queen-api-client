export const getProductsMock = (status) => {
  global.fetch = jest.fn(() => Promise.resolve({
    status,
    json: () => Promise.resolve([{
      _id: '01',
      name: 'Hamburguesa mock',
      price: 10,
      image: 'image-hamburguesa.jpg',
      type: 'hamburguesa',
      dateEntry: '09/09/2020',
    },
    {
      _id: '02',
      name: 'Gaseosa mock',
      price: 5,
      image: 'image-gaseosa.jpg',
      type: 'acompañamiento',
      dateEntry: '09/09/2020',
    },
    ]),
  }));
};
export const getAllProductsMock = (status) => {
  global.fetch = jest.fn(() => Promise.resolve({
    status,
    json: () => Promise.resolve([{
      _id: '01',
      name: 'Hamburguesa mock',
      price: 10,
      image: 'image-hamburguesa.jpg',
      type: 'hamburguesa',
      dateEntry: '09/09/2020',
    },
    {
      _id: '02',
      name: 'Gaseosa mock',
      price: 5,
      image: 'image-gaseosa.jpg',
      type: 'acompañamiento',
      dateEntry: '09/09/2020',
    },
    {
      _id: '03',
      name: 'Agua mock',
      price: 5,
      image: 'image-agua.jpg',
      type: 'agua',
      dateEntry: '09/09/2020',
    },
    ]),
  }));
};

export const postProductMock = (status, body) => {
  global.fetch = jest.fn(() => Promise.resolve({
    status,
    json: () => Promise.resolve(body),
  }));
};
