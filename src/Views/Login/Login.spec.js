import '@testing-library/jest-dom'
import React from 'react'
// import API mocking utilities from Mock Service Worker.
import {rest} from 'msw'
import {setupServer} from 'msw/node'
// import testing utilities
import {render, fireEvent, screen} from '@testing-library/react'
import Login from './Login'

const server = setupServer(
  rest.post('http://134.122.82.187:8000/auth', (req, res, ctx) => {

    return res(ctx.json({token: 'fake_user_token'}))
  }),
)

beforeAll(() => server.listen())
afterEach(() => {
  server.resetHandlers()
  window.localStorage.removeItem('token')
})
afterAll(() => server.close())

test('allows the user to login successfully', async () => {
  render(<Login />)

  // fill out the form
  fireEvent.change(screen.getByPlaceholderText(/email/i), {
    target: {value: 'admin@gmail.com'},
  })
  fireEvent.change(screen.getByPlaceholderText(/password/i), {
    target: {value: 'norris'},
  })

  fireEvent.click(screen.getByText(/Login/i))

//   const alert = await screen.findByRole('alert')
//   expect(alert).toHaveTextContent(/congrats/i)
  expect(window.localStorage.getItem('token')).toEqual('fake_user_token')
})

// test('handles server exceptions', async () => {
//   // mock the server error response for this test suite only.
//   server.use(
//     rest.post('/', (req, res, ctx) => {
//       return res(ctx.status(500), ctx.json({message: 'Internal server error'}))
//     }),
//   )

//   render(<Login />)

//   // fill out the form
//   fireEvent.change(screen.getByLabelText(/username/i), {
//     target: {value: 'chuck'},
//   })
//   fireEvent.change(screen.getByLabelText(/password/i), {
//     target: {value: 'norris'},
//   })

//   fireEvent.click(screen.getByText(/submit/i))

//   // wait for the error message
//   const alert = await screen.findByRole('alert')

//   expect(alert).toHaveTextContent(/internal server error/i)
//   expect(window.localStorage.getItem('token')).toBeNull()
// })