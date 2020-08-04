import { connect } from 'react-redux'
import ProductList from './ProductList'
import { getProducts } from '../../store/actions/async'
import { setPage } from '../../store/actions/products'

const mapStateToProps = (state /*, ownProps */) => {
  return {
    products: state.products.data,
    page: state.products.page
  }
}

const actionCreators = {
  getProducts,
  setPage
}

export default connect(
  mapStateToProps,
  actionCreators
)(ProductList)
