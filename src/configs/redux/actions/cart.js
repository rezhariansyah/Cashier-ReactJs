import Axios from 'axios'
import urlApi from '../../urlApi'

export const getCartitem = () => {
    return {
        type : "GET_CART_ITEM",
        payload : Axios.get(urlApi + '/product/cart')
    }
}