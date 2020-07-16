import {
  createStore as createReduxStore,
  combineReducers,
  applyMiddleware,
} from 'redux'

import thunk from 'redux-thunk'
import products, { productsInitialState } from './reducers/products'

export const initialState = {
  products: productsInitialState,
}

export const reducer = combineReducers({
  products,
})

export const createStore = (
  storeReducer = reducer,
  storeInitialState = initialState,
) =>
  createReduxStore(
    storeReducer,
    storeInitialState,
    applyMiddleware(thunk),
  )

export default createStore(reducer, initialState)
