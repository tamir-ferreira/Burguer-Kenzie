import "./styles/App.css";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";
import { useEffect, useState } from "react";
import { getProducts } from "./services/api";
import { ProductList } from "./components/ProductList";

export const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="container">
        <ProductList products={products} />
        <Cart />
      </main>
    </div>
  );
};
