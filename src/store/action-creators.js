import { Axios } from '../helpers/axios'
import { FETCHING_PRODUCTS, FETCHED_PRODUCTS } from './constants'

export const fetchProducts = ({
  search = '',
}) => {
  return (dispatch) => {
    dispatch({
      type: FETCHING_PRODUCTS,
    })

    return Axios.get(`products?search=${search}`).then(({ data }) => dispatch({
      type: FETCHED_PRODUCTS,
      products: data,
    }))
  }
}
