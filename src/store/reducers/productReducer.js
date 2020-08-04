import cloneDeep from 'lodash/cloneDeep'
import { ADD_PRODUCTS, SET_PRODUCTS_PAGE, SET_FAVORITE } from '../actions/products'

const initialState = {
  data: [],
  page: 1
}
export default function productReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCTS:
      return {
        ...state,
        data: state.data.concat(action.payload)
      }
    case SET_PRODUCTS_PAGE:
      return {
        ...state,
        page: action.payload
      }
    case SET_FAVORITE:
      return {
        ...state,
        data: getDataUpdated(state.data, action.payload)
      }
    default:
      return state
  }
}

function getDataUpdated (products, payload) {
  const data = cloneDeep(products)
  const product = data.find(p => p.id === payload.id)
  product.favorite = payload.favorite
  return data
}
