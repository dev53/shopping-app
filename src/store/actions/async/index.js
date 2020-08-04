/* global fetch */
import { addProducts, updateFavorite } from '../products'
import { setError } from '../error'

const API_HOST = 'http://localhost:3000'
const LIMIT = 8

export const getProducts = (page = 1, favorite = false) => {
  return async dispatch => {
    const response = await fetch(`${API_HOST}/grocery?_page=${page}&_limit=${LIMIT}${favorite ? 'favorite=1' : ''}`)
    if (response.ok) {
      const data = await response.json()
      dispatch(addProducts(data))
      // next line would normally would be in only one place with access to all responses and the store dispatch, ask me!
    } else {
      dispatch(setError(new Error('network')))
    }
  }
}

export const updateServerFavorite = (id, favorite = false) => {
  return async dispatch => {
    const response = await fetch(`${API_HOST}/grocery/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({ favorite })
    })
    if (response.ok) {
      dispatch(updateFavorite({ id, favorite }))
    } else {
      throw new Error()
    }
  }
}
