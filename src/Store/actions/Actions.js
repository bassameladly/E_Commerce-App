import {
  ADD_TO_CART,
  REMOVE_ITEM,
  ADD_QUANTITY,
  ADD_SHIPPING,
  SUB_QUANTITY,
} from "./Types/Types";

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id,
  };
};
export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id,
  };
};
export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id,
  };
};
export const addShipping = (id) => {
  return {
    type: ADD_SHIPPING,
    id,
  };
};
export const subQuantity = (id) => {
  return {
    type: SUB_QUANTITY,
    id,
  };
};
