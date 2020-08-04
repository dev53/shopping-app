import { SET_ERROR } from '../actions/error'

export default function (state = null, action) {
  switch (action.type) {
    case SET_ERROR:
      return action.payload
    default:
      return state
  }
}
