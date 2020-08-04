import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import CartItem from './CartItem'
import './Cart.css'

function Cart (props) {
  const { cart, products, addToCart, removeFromCart } = props

  const cartItems = cart.items.map(item => {
    const product = products.find(p => p.id === item.id)
    return <CartItem key={product.id} product={product} total={item.total} addAction={addToCart} removeAction={removeFromCart} />
  })
  // this could be sum in the reducer if too big!
  const total = cart.items.reduce((acc, item) => {
    const product = products.find(p => p.id === item.id)
    return acc + product.price * item.total
  }, 0)

  return (
    <div className='cart-container'>
      <nav><Link className='mobile-link' to='/'>Products</Link></nav>
      <h2>Cart</h2>
      <div>
        {!cartItems.length && <p className='text-center'>Add something!</p>}
        {cartItems}

      </div>
      <div className='cart-actions'>
        <div className='total-pay'>
          <b>${total}</b>
        </div>

        <button className='checkout shop'>Checkout</button>
      </div>
    </div>
  )
}

Cart.propTypes = {
  cart: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired
}

export default Cart
