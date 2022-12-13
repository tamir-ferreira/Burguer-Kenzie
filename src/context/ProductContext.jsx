import { createContext, useEffect, useState } from "react";
import { getProducts } from "../services/api";

export const ProductContext = createContext({});

/* export interface iProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
} */

export const ProductProvider = ({ children }) => {
  const [wordSearch, setWordSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  // const [products, setProducts] = useState<iProducts | []>([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);

  /*  useEffect(() => {
    getProducts(setProducts);
  }, []); */

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
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
