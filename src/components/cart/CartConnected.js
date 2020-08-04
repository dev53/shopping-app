import { connect } from 'react-redux'
import Cart from './Cart'
import { setTotal, addToCart, removeFromCart } from '../../store/actions/cart'

const mapStateToProps = (state /*, ownProps */) => {
  return {
    products: state.products.data,
    cart: state.cart
  }
}
const actionCreators = {
  setTotal,
  addToCart,
  removeFromCart
}

export default connect(
  mapStateToProps,
  actionCreators
)(Cart)
