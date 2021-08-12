import { commerce } from "../lib/commerce.js";

export const CREATE_CART = "CREATE_CART";
export const ADD_TO_CART = "ADD_TO_CART";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

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
