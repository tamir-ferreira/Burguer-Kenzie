import { createContext, useState } from "react";

export const ProductContext = createContext({});

/* export interface iProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
} */

export const ProductProvider = ({ children }) => {
  // const [cartCounter, setCartCounter] = useState(0);
  const [wordSearch, setWordSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  // const [products, setProducts] = useState<iProducts | []>([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);

  /*  useEffect(() => {
    getProducts(setProducts);
  }, []); */

  const cleanSearch = () => {
    setWordSearch("");
    setFilteredProducts([]);
  };

  return (
    <ProductContext.Provider
      value={{
        // cartCounter,
        // setCartCounter,
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
