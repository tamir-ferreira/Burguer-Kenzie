import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";
import { useEffect, useState } from "react";
import { getProducts } from "./services/api";
import { ProductList } from "./components/ProductList";
import { Login } from "./pages/login";

export interface iProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export const App = () => {
  const [wordSearch, setWordSearch] = useState("");
  const [products, setProducts] = useState<iProducts | []>([]);
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
      <Login />
    </div>
  );
};
