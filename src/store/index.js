import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { productReducer } from './reducers'
import errorReducer from './reducers/errorReducer'
import cartReducer from './reducers/cartReducer'

const AppReducers = combineReducers({
  products: productReducer,
  cart: cartReducer,
  error: errorReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const store = createStore(
  AppReducers,
  composeEnhancers(
    applyMiddleware(
      thunk
    )
  )
)

export default store
