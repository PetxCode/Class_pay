import axios from "axios";

const url: string = "http://localhost:6677/api";
export const loginMerchant = async (email: string) => {
  try {
    return await axios.post(`${url}/login`, { email }).then((res: {}) => {
      return res;
    });
  } catch (error) {
    console.error();
  }
};
export const storeData = async () => {
  try {
    return await axios.get(`${url}/store`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.error();
  }
};
export const verifyData = async (ref: string) => {
  try {
    return await axios.get(`${url}/payment/${ref}`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.error();
  }
};
export const makePay = async (price: number) => {
  try {
    return await axios.post(`${url}/payment/`, { price }).then((res: any) => {
      return res.data;
    });
  } catch (error) {
    console.error();
  }
};
