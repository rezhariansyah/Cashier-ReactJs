import Axios from 'axios'
import urlApi from '../../urlApi'

export const getCartitem = () => {
    return {
        type : "GET_CART_ITEM",
        payload : Axios.get(urlApi + '/product/cart')
    }
}

export const addToCart = (id_product, data) => {
    console.log(data);  
    return {
        type : "ADD_TO_CART",
        payload : Axios.patch(urlApi + '/product/' + id_product, data)
    }
}

export const deleteCartItem = (id_product) => {
    return {
        type : "DELETE_CART_ITEM",
        payload : Axios.patch(urlApi + '/product/delete/' + id_product)
    }
}
