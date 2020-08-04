import { connect } from 'react-redux'
import ProductCard from './ProductCard'
import { updateServerFavorite } from '../../store/actions/async'
import { addToCart } from '../../store/actions/cart'

const actionCreators = {
  updateServerFavorite,
  addToCart
}

export default connect(
  null,
  actionCreators
)(ProductCard)
