/* eslint camelcase: [0] */
export const SET_TOTAl = 'SET_TOTAl'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const setTotal = function (id, total) {
  return {
    type: SET_TOTAl,
    payload: total
  }
}
export const addToCart = function (product) {
  return {
    type: ADD_TO_CART,
    payload: product
  }
}

export const removeFromCart = function (product) {
  return {
    type: REMOVE_FROM_CART,
    payload: product
  }
}
