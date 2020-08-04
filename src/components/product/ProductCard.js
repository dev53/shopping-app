import React from 'react'
import PropTypes from 'prop-types'
import './ProductCard.css'

function ProductCard ({ product, updateServerFavorite, addToCart }) {
  const { id, productName, productDescription, price, stock, favorite } = product
  const onBtnClick = e => {
    e.preventDefault()
    addToCart(product)
  }

  const onFavoriteClick = e => {
    e.preventDefault()
    updateServerFavorite(id, favorite ? 0 : 1)
  }

  return (
    <div className='product-card'>
      <div className='card-header'>
        <img src={product.image_url} alt='name' />
        <img
          title={favorite ? 'Remove from favorites' : 'Add to favorites'}
          onClick={onFavoriteClick}
          className='favorite'
          src={favorite ? '/images/star.png' : '/images/white-star.png'}
          alt='starred'
        />
      </div>
      <div className='card-info'>
        <div className=' container'>
          <div>
            <b>{productName}</b>
          </div>
          <div><span>${price}</span></div>
        </div>
        <div className='descp'>
          <p>
            {productDescription}
          </p>
        </div>
        <div className='card-actions container'>
          <div>{stock} left</div>
          <div>
            <button className='shop' onClick={onBtnClick}> + add</button>
          </div>
        </div>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    favorite: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    image_url: PropTypes.string.isRequired,
    productDescription: PropTypes.string.isRequired
  }),
  updateServerFavorite: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired
}

export default ProductCard
