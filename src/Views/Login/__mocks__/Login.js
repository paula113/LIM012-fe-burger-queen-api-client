export const mockStatus = (status) => {
  global.fetch = jest.fn(() => Promise.resolve({
    status,
    json: () => Promise.resolve({
      token: 'fake_user_token',
    }),
  }));
};
