import { CREATE_CART, ADD_TO_CART, FETCH_PRODUCTS } from "../actions";

const initialState = {
  products: [],
  cart: {},
  size: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CART:
      return {
        ...state,
        cart: action.payload,
        size: action.payload.total_items,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: action.payload,
        size: action.payload.total_items,
      };
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
