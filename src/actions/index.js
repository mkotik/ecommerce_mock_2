import { commerce } from "../lib/commerce.js";

export const CREATE_CART = "CREATE_CART";
export const ADD_TO_CART = "ADD_TO_CART";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const UPDATE_ITEM_QTY = "UPDATE_ITEM_QTY";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CREATE_CHECKOUT_TOKEN = "CREATE_CHECKOUT_TOKEN";

export const getInitialData = () => {
  return async (dispatch) => {
    await commerce.products
      .list()
      .then((res) => {
        dispatch(fetchProducts(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
    await commerce.cart
      .retrieve()
      .then((res) => {
        dispatch(createCart(res));
      })
      .catch((err) => console.log(err));
  };
};

export const updateItemQuantity = (id, quantity) => {
  return async (dispatch) => {
    await commerce.cart
      .update(id, { quantity: quantity })
      .then((res) => {
        dispatch({ type: UPDATE_ITEM_QTY, payload: res.cart });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const removeItem = (id) => {
  return async (dispatch) => {
    await commerce.cart
      .remove(id)
      .then((res) => {
        dispatch({ type: REMOVE_ITEM, payload: res.cart });
      })
      .catch((err) => console.log(err));
  };
};

export const createCheckoutToken = (id) => {
  return async (dispatch) => {
    await commerce.checkout
      .generateTokenFrom("cart", id)
      .then((res) => dispatch({ type: CREATE_CHECKOUT_TOKEN, payload: res }))
      .catch((err) => console.log(err));
  };
};

export const createCart = (value) => {
  console.log("here");
  return { type: CREATE_CART, payload: value };
};

export const addToCart = (value) => {
  return { type: ADD_TO_CART, payload: value };
};

export const fetchProducts = (value) => {
  return { type: FETCH_PRODUCTS, payload: value };
};
