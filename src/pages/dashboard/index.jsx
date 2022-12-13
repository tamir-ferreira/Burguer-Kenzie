import { useContext, useEffect } from "react";
import { Cart } from "../../components/Cart";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { ProductContext } from "../../context/ProductContext";
import { api, getProducts } from "../../services/api";

export const DashboardPage = () => {
  const { products, setProducts, filteredProducts } =
    useContext(ProductContext);

  useEffect(() => {
    const loadProducts = async () => {
      const token = localStorage.getItem("@TOKEN");
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      if (!token) {
        setWaitUser(false);
        return;
      }

      const response = await getProducts();
      console.log(response);
      setProducts(response);
    };

    loadProducts();
    /* return () => {
      
    } */
  }, []);

  return (
    <>
      <Header />
      <main className={"container"}>
        <ProductList
          products={filteredProducts.length != 0 ? filteredProducts : products}
        />
        <Cart />
      </main>
    </>
  );
};
