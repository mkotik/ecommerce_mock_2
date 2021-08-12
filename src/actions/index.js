import { commerce } from "../lib/commerce.js";

export const CREATE_CART = "CREATE_CART";
export const ADD_TO_CART = "ADD_TO_CART";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

export const getData = () => {
  console.log("hello");
  return async (dispatch) => {
    await commerce.products
      .list()
      .then((res) => {
        dispatch(fetchProducts(res.data));
        dispatch(createCart(commerce.cart.retrieve()));
      })
      .catch((err) => {
        console.log("bye");
        console.log(err);
      });
  };
};

export const getCart = () => {
  return async (dispatch) => {
    const cart = await commerce.cart.retrieve();
    dispatch(createCart(cart));
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
