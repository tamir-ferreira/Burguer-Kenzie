import axios from "axios";

const api = axios.create({
  baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com",
  timeout: 5000,
});

export const getProducts = async (setList) => {
  try {
    const response = await api.get("products");
    setList(response.data);
  } catch (error) {
    console.error(error);
  }
};
