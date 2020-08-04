export const SET_ERROR = 'SET_ERROR'

export const setError = function (data) {
  return {
    type: SET_ERROR,
    payload: data
  }
}
