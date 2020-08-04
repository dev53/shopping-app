/* eslint-env jest */

import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, waitForElementToBeRemoved } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from './store'
import { addProducts } from './store/actions/products'
import App from './App'

beforeAll(() => {
  window.fetch = jest.fn(() => Promise.resolve([]))

  store.dispatch(addProducts([
    {
      id: '41fd4fd9-95c7-4809-96db-a147d352fdbb',
      image_url: 'https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair',
      stock: 8,
      productName: 'Unbranded Metal Chair',
      price: 43,
      productDescription: 'Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo.',
      favorite: 0
    },
    {
      id: 'ab284424-8e46-4a3e-8e13-e179b0ab8bb5',
      image_url: 'https://dummyimage.com/400x400/4de5d5/000&text=Awesome Cotton Soap',
      stock: 47,
      productName: 'Awesome Cotton Soap',
      price: 66,
      productDescription: 'Molestias sunt quia omnis reprehenderit quia. Iste quia et similique voluptate. Et sit molestias.',
      favorite: 0
    }
  ]))
})

describe('App', () => {
  it('should render without crashing', async () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    await waitForElementToBeRemoved(() => getByText(/Loading.../i))
    expect(getByText('Product List')).toBeInTheDocument()
    expect(getByText('Unbranded Metal Chair')).toBeInTheDocument()
    expect(getByText('Awesome Cotton Soap')).toBeInTheDocument()

    expect(getByText('Checkout')).toBeInTheDocument()
  })
})
