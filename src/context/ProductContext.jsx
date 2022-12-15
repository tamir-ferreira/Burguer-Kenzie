import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api, getProducts } from "../services/api";
import { UserContext } from "./UserContext";

export const ProductContext = createContext({});

/* export interface iProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
} */

export const ProductProvider = ({ children }) => {
  const navigate = useNavigate();
  const [wordSearch, setWordSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  // const [showProducts, setShowProducts] = useState([]);
  // const [products, setProducts] = useState<iProducts | []>([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);
  const { userInfo, setLoadUser } = useContext(UserContext);

  useEffect(() => {
    const loadProducts = async () => {
      console.log("montagem");
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
    <ProductContext.Provider
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
    </ProductContext.Provider>
  );
};
