export interface ProductProvider {
  children: React.ReactNode;
}

export interface Products {
  id: number;
  name: string;
  category: "Sanduíches" | "Bebidas";
  price: number;
  img: string;
}

export interface ProductsContext {
  /* wordSearch:,
    setWordSearch,
    products,
    setProducts,
    cartList,
    setCartList,
    filteredProducts,
    setFilteredProducts,
    cleanSearch, */
  /* userInfo: null | UserInfo;
  loadUser: boolean;
  setLoadUser: React.Dispatch<React.SetStateAction<boolean>>;
  loginSubmit: (data: DataLogin) => void;
  registerSubmit: (data: DataRegister) => void;
  logout: () => void; */
}
