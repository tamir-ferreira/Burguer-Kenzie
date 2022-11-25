import "./styles/App.css";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";
import { useEffect, useState } from "react";
import { getProducts } from "./services/api";
import { ProductList } from "./components/ProductList";

export const App = () => {
  const [products, setProducts] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [total, setTotal] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    getProducts(setProducts);
  }, []);
  // console.log(filteredProducts);
  return (
    <div className="App">
      <Header products={products} setFilteredProducts={setFilteredProducts} />
      <main className="container">
        <ProductList
          products={filteredProducts != "" ? filteredProducts : products}
          cartList={cartList}
          setCartList={setCartList}
        />
        <Cart
          cartList={cartList}
          setCartList={setCartList}
          total={total}
          setTotal={setTotal}
        />
      </main>
    </div>
  );
};
