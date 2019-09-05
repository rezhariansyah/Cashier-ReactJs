const initialState = {
    productList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
  };
  
  const product = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_ALL_PRODUCT_PENDING':
        return {
          ...state,
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
        };
      case 'GET_ALL_PRODUCT_REJECTED':
        return {
          ...state,
          isLoading: false,
          isRejected: true,
        };
      case 'GET_ALL_PRODUCT_FULFILLED':
        console.log(action.payload.data);
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          productList: action.payload.data.result,
        };
      default:
        return state;
    }
  };
  
  export default product;
  