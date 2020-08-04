export const RESET_PRODUCTS = 'RESET_PRODUCTS'
export const ADD_PRODUCTS = 'ADD_PRODUCTS'
export const SET_PRODUCTS_PAGE = 'SET_PRODUCTS_PAGE'
export const SET_FAVORITE = 'SET_FAVORITE'

export const resetProducts = function () {
  return {
    type: RESET_PRODUCTS,
    payload: []
  }
}

export const addProducts = function (data) {
  return {
    type: ADD_PRODUCTS,
    payload: data
  }
}

export const setPage = function (data) {
  return {
    type: SET_PRODUCTS_PAGE,
    payload: data
  }
}

export const updateFavorite = function (data) {
  return {
    type: SET_FAVORITE,
    payload: data
  }
}
