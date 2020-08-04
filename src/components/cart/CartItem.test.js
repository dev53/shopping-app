/* eslint-env jest */
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import CartItem from './CartItem'

describe('CartItem', () => {
  let productMock
  let onAddClick
  let onRemoveClick

  beforeEach(() => {
    productMock = {
      productName: 'Foo',
      image_url: '',
      price: 5
    }
    onAddClick = jest.fn(() => true)
    onRemoveClick = jest.fn(() => true)
  })

  it('should render without crashing', () => {
    const { getByText } = render(
      <CartItem product={productMock} total={1} addAction={onAddClick} removeAction={onRemoveClick} />
    )
    expect(getByText('Foo')).toBeInTheDocument()
  })

  it('should call proper callback on add click', () => {
    const { getByText } = render(
      <CartItem product={productMock} total={1} addAction={onAddClick} removeAction={onRemoveClick} />
    )
    const addBtnText = '+'
    fireEvent.click(getByText(addBtnText))

    expect(onAddClick).toHaveBeenCalled()
  })

  it('should call proper callback on add click', () => {
    const { getByText } = render(
      <CartItem product={productMock} total={1} addAction={onAddClick} removeAction={onRemoveClick} />
    )
    const removeBtnText = '-'
    fireEvent.click(getByText(removeBtnText))

    expect(onRemoveClick).toHaveBeenCalled()
  })
})
