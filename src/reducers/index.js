import {
  CREATE_CART,
  ADD_TO_CART,
  FETCH_PRODUCTS,
  UPDATE_ITEM_QTY,
  REMOVE_ITEM,
  CREATE_CHECKOUT_TOKEN,
} from "../actions";

const initialState = {
  products: [],
  cart: {},
  checkoutToken: {},
  cartSize: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CART:
      return {
        ...state,
        cart: action.payload,
        cartSize: action.payload.total_items,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: action.payload,
        cartSize: action.payload.total_items,
      };
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case UPDATE_ITEM_QTY:
      return {
        ...state,
        cart: action.payload,
        cartSize: action.payload.total_items,
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cart: action.payload,
        cartSize: action.payload.total_items,
      };
    case CREATE_CHECKOUT_TOKEN:
      return {
        ...state,
        checkoutToken: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
