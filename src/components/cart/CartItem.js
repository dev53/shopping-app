import React from 'react'
import PropTypes from 'prop-types'
import './CartItem.css'

function CartItem (props) {
  const { product, total, addAction, removeAction } = props
  const onAddClick = e => {
    e.preventDefault()
    addAction(product)
  }
  const onRemoveClick = e => {
    e.preventDefault()
    removeAction(product)
  }

  return (
    <div className='cart-item'>
      <div className='container'>
        <div>
          <img src={product.image_url} alt='name' />
        </div>
        <div className='cart-info'>
          <div>
            <div>
              <b>{product.productName}</b>
            </div>
            <div className='cart-price'><span>${product.price}</span></div>
          </div>

          <div className='cart-actions'>
            <button onClick={onRemoveClick}>-</button>
            {total}
            <button onClick={onAddClick}>+</button>
          </div>
        </div>
      </div>

    </div>
  )
}

CartItem.propTypes = {
  product: PropTypes.shape({
    price: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired
  }),
  total: PropTypes.number.isRequired,
  addAction: PropTypes.func.isRequired,
  removeAction: PropTypes.func.isRequired
}

export default CartItem
