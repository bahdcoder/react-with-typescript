import { FETCHING_PRODUCTS, FETCHED_PRODUCTS } from '../constants'

export const productsInitialState = {
  data: [],
  loading: false,
}

const productsReducer = (
  state = productsInitialState,
  action,
) => {
  if (action.type === FETCHING_PRODUCTS) {
    return {
      ...state,
      loading: true,
    }
  }

  if (action.type === FETCHED_PRODUCTS) {
    return {
      ...state,
      loading: false,
      data: action.products,
    }
  }

  return state
}

export default productsReducer
