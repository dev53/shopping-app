/* eslint camelcase: [0] */
import { SET_TOTAl, ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart'
import { cloneDeep } from 'lodash'

const initialState = {
  items: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_TOTAl:
      return {
        items: updateTotalItem(state.items, action.payload)
      }
    case ADD_TO_CART:
      return {
        items: add(state.items, action.payload)
      }
    case REMOVE_FROM_CART:
      return {
        items: remove(state.items, action.payload)
      }
    default:
      return state
  }
}

function add (items, product) {
  const itemInCart = items.find(p => p.id === product.id)
  if (itemInCart) {
    if (product.stock >= itemInCart.total + 1) {
      return updateTotalItem(items, {
        id: product.id,
        total: itemInCart.total + 1
      })
    }
    return items
  }
  return [
    ...items,
    {
      id: product.id,
      total: 1
    }
  ]
}

function remove (items, product) {
  const itemInCart = items.find(p => p.id === product.id)
  if (itemInCart) {
    if (itemInCart.total - 1 > 0) {
      return updateTotalItem(items, {
        id: product.id,
        total: itemInCart.total - 1
      })
    }
    return [...items.filter(i => i.id !== product.id)]
  }
  return items
}

function updateTotalItem (items, payload) {
  const data = cloneDeep(items)
  const item = data.find(i => i.id === payload.id)
  item.total = payload.total
  return data
}
