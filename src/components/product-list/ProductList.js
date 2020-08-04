import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ProductCardConnected from '../product/ProductCardConnected'
import './ProductList.css'

function ProductList (props) {
  const { products, getProducts, page, setPage } = props
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadData () {
      try {
        await getProducts(page)
        setLoading(false)
        setError(null)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
    loadData()
  }, [getProducts, page])

  const buttonHandle = e => {
    e.preventDefault()
    setLoading(true)
    setPage(page + 1)
  }

  const cards = products.map((p, i) => <ProductCardConnected key={i} product={p} />)

  return (
    <div className='products-container'>
      <nav><Link to='/cart' className='mobile-link'>Cart</Link></nav>
      <h2>Product List</h2>
      <div className='list'>
        {cards}
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className='text-red'>Network error!</p>}
      <div className='more'>
        <button onClick={buttonHandle}> Load more </button>
      </div>
    </div>
  )
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  getProducts: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired
}

export default ProductList
