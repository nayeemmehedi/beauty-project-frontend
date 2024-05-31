import { apiValue } from "./Main";

export const buyBkash = async (body) => {
    try {
      const response = await apiValue.post("/payment/init",body);
      // console.log("response data", response.data);
  
      return response.data;
    } catch (error) {
      console.log(error)
      return null
    }
  };