import axiosFunction from "../../components/api/Api";
export const PRODUCTS = "PRODUCTS";

export const productAc = () => async (dispatch, getState) => {
  const dataY = await axiosFunction("products");
  
  console.log(dataY.data);

  dispatch({
    type: PRODUCTS,
    payload: dataY.data,
  });
};
