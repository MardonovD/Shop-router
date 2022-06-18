export const PRODUCTS = "PRODUCTS";

export const productAc = (data) => (dispatch) => {
  dispatch({
    type: PRODUCTS,
    payload: data,
  });
};
