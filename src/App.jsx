import "./styles/App.css";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";
import { useEffect, useState } from "react";
import { getProducts } from "./services/api";
import { ProductList } from "./components/ProductList";

export const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getProducts(setList);
  }, []);

  return (
    <div className="App">
      {/* <StyledHeader /> */}
      <Header />
      <main className="container">
        <section>
          <ProductList />
        </section>
        {/* <aside> */}
        <Cart />
        {/* </aside> */}
      </main>
    </div>
  );
};
