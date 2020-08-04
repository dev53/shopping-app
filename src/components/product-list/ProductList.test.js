/* eslint-env jest */
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { Router } from 'react-router-dom'
import { render, waitForElementToBeRemoved } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import store from '../../store'
import { addProducts } from '../../store/actions/products'
import ProductList from './ProductList'

jest.mock('../product/ProductCardConnected', () => () => <p>card</p>)

const dataMock = [
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
    id: '20cc33f1-223b-4cf0-878d-fdedb3f60b56',
    image_url: 'https://dummyimage.com/400x400/2ee9f7/000&text=Handcrafted Metal Towels',
    stock: 41,
    productName: 'Handcrafted Metal Towels',
    price: 98,
    productDescription: 'Rerum minima laudantium blanditiis dolorem dolores ut sint ut quidem. Est doloremque repellat excepturi dolor consequatur rerum qui. Facere ut vel et enim accusamus ipsum dolores aut. Eaque quo ut omnis unde quam error voluptas non iure.',
    favorite: 1
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
]

store.dispatch(addProducts(dataMock))

describe('ProductList', () => {
  let productsMock
  let getProducts
  let setPage
  beforeEach(() => {
    productsMock = dataMock

    getProducts = jest.fn(() => Promise.resolve())
    setPage = jest.fn(() => 1)
  })

  it('should render without crashing', async () => {
    const { getByText } = render(
      <Router history={createMemoryHistory()}>
        <ProductList products={productsMock} page={1} getProducts={getProducts} setPage={setPage} />
      </Router>
    )
    await waitForElementToBeRemoved(() => getByText(/Loading.../i))
    expect(getByText('Product List')).toBeInTheDocument()
  })

  it('should render the cards', async () => {
    const { getAllByText, getByText } = render(
      <Router history={createMemoryHistory()}>
        <ProductList products={productsMock} page={1} getProducts={getProducts} setPage={setPage} />
      </Router>
    )
    await waitForElementToBeRemoved(() => getByText(/Loading.../i))
    expect(getAllByText('card').length).toBe(3)
  })
})
