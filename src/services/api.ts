import axios from "axios";
import { iProducts } from "./../App";

const api = axios.create({
  baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com",
  timeout: 5000,
});

export const getProducts = async (
  setProducts: React.Dispatch<React.SetStateAction<iProducts | []>>
) => {
  try {
    const response = await api.get("products");
    setProducts(response.data);
  } catch (error) {
    console.error(error);
  }
};
