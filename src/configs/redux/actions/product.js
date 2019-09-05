import Axios from 'axios'
import urlApi from '../../urlApi'

export const getAllProduct = () => {
    return {
        type : "GET_ALL_PRODUCT",
        payload : Axios.get(urlApi + '/product')
    }
}

export const addItem = (data) => {
    return {
        type : "ADD_ITEM",
        payload : Axios.post(urlApi +'/product', data)
    }
}
