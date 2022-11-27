import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { ToastContainer } from "react-toastify";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";
import { useEffect, useState } from "react";
import { getProducts } from "./services/api";
import { ProductList } from "./components/ProductList";

export const App = () => {
  const [products, setProducts] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  return (
    <div className="App">
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        draggable={false}
        theme="colored"
      />
      <Header products={products} setFilteredProducts={setFilteredProducts} />
      <main className="container">
        <ProductList
          products={filteredProducts != "" ? filteredProducts : products}
          cartList={cartList}
          setCartList={setCartList}
        />
        <Cart cartList={cartList} setCartList={setCartList} />
      </main>
    </div>
  );
};
