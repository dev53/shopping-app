import React from 'react'
import CartConnected from '../cart/CartConnected'
import ProductList from '../product-list'
import './Home.css'

function Home ({ error }) {
  return (
    <div className='home'>
      {error && <p className='text-red'>NETWORK ERROR!</p>}
      <div className='container'>
        <ProductList />
        <CartConnected />
      </div>
    </div>
  )
}

export default Home
