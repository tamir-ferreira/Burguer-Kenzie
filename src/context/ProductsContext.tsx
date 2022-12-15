import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api, getProducts } from "../services/api";
import { UserContext } from "./UserContext";
import * as i from "../interfaces/ProductsInterfaces";

export const ProductsContext = createContext({} as i.ProductsContext);

export const ProductsProvider = ({ children }: i.ProductsProvider) => {
  const navigate = useNavigate();
  const [wordSearch, setWordSearch] = useState("");
  const [products, setProducts] = useState<i.Products[] | []>([]);
  const [cartList, setCartList] = useState<i.CartList[] | []>([]);
  const [filteredProducts, setFilteredProducts] = useState<i.Products[] | []>(
    []
  );

  const { userInfo, setLoadUser } = useContext(UserContext);

  useEffect(() => {
    const loadProducts = async () => {
      const token = localStorage.getItem("@TOKEN");

      if (!token) {
        setLoadUser(false);
        navigate("/");
        return;
      }
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      const response = await getProducts();
      console.log("resposta", response);

      if (response) {
        setProducts(response);
        setLoadUser(false);
        navigate("/dashboard");
      } else {
        localStorage.clear();
      }
    };

    loadProducts();
  }, [userInfo]);

  const cleanSearch = () => {
    setWordSearch("");
    setFilteredProducts([]);
  };

  return (
    <ProductsContext.Provider
      value={{
        wordSearch,
        setWordSearch,
        products,
        setProducts,
        cartList,
        setCartList,
        filteredProducts,
        setFilteredProducts,
        cleanSearch,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
