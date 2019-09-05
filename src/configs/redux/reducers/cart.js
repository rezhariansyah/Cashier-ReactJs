const initialState = {
    cartList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
  };
  
  const cart = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_CART_ITEM_PENDING':
        return {
          ...state,
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
        };
      case 'GET_CART_ITEM_REJECTED':
        return {
          ...state,
          isLoading: false,
          isRejected: true,
        };
      case 'GET_CART_ITEM_FULFILLED':
        console.log(action.payload.data);
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          cartList: action.payload.data.result,
        };
      default:
        return state;
    }
  };
  
  export default cart;
  