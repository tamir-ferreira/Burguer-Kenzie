import { useContext } from "react";
import { Cart } from "../../components/Cart";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { ProductContext } from "../../context/ProductContext";

export const DashboardPage = () => {
  const { products, filteredProducts } = useContext(ProductContext);
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
