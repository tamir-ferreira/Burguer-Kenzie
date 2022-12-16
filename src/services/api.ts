import { DataLogin } from "./../interfaces/UserInterfaces";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import * as i from "../interfaces/UserInterfaces";

export const api = axios.create({
  baseURL: "https://hamburgueria-kenzie-v2.herokuapp.com",
  timeout: 5000,
});

interface iDefaultErrorResponse {
  error: string;
}
/* export const getProducts = async (
  setProducts: React.Dispatch<React.SetStateAction<iProducts | []>>
) => { */
export const getProducts = async () => {
  try {
    const { data } = await api.get("/products");

    return data;
  } catch (error) {
    const message = error as AxiosError<iDefaultErrorResponse>;

    message.response?.data.error === "jwt expired" &&
      toast.error("Token espirado! Faça Login novamente!");
    return false;
  }
};

export const createUser = async (body: i.DataRegister) => {
  try {
    const { data, status } = await api.post("/users", body);

    status === 201 && toast.success("Usuário cadastrado com Sucesso!");

    return data;
  } catch (error) {
    const message = error as AxiosError<iDefaultErrorResponse>;

    message.response?.data.error === "Email already exists" &&
      toast.error("E-mail já existe!");
    return false;
  }
};

export const loginUser = async (body: i.DataLogin) => {
  try {
    const { status, data } = await api.post("/login", body);

    status === 200 &&
      ((api.defaults.headers.common.authorization = `Bearer ${data.accessToken}`),
      toast.success("Usuário logado com Sucesso!"));

    return data;
  } catch (error) {
    const message = error as AxiosError<iDefaultErrorResponse>;

    message.response?.data.error === "Incorrect password" &&
      toast.error("Senha inválida!");
    message.response?.data.error === "Cannot find user" &&
      toast.error("Usuário não encontrado!");
    return false;
  }
};
