import Axios from 'axios'
import urlApi from '../../urlApi'

export const getAllProduct = () => {
    return {
        type : "GET_ALL_PRODUCT",
        payload : Axios.get(urlApi + '/product')
    }
}

