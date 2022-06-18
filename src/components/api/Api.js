import axios from "axios";

const axiosFunction = async (pro) => {
  const respons = await axios.get(`https://fakestoreapi.com/${pro}`);

  console.log(respons);
};

export default axiosFunction;
