import axios from "axios";

const axiosFunction = async (pro) => {
  const respons = await axios.get(`https://fakestoreapi.com/${pro}`);
  return respons; 
};

export default axiosFunction;
