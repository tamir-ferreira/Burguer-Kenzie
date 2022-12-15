import { useContext } from "react";
import { Cart } from "../../components/Cart";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { ProductContext } from "../../context/ProductContext";
import { UserContext } from "../../context/UserContext";

export const DashboardPage = () => {
  const { loadUser } = useContext(UserContext);
  const { products, filteredProducts, setShowProducts } =
    useContext(ProductContext);

  /* if (filteredProducts.length != 0) {
    setShowProducts(filteredProducts);
  } else {
    setShowProducts(products);
  } */

  return !loadUser ? (
    <>
      <Header />
      <main className={"container"}>
        <ProductList
          products={filteredProducts.length != 0 ? filteredProducts : products}
        />
        <Cart />
      </main>
    </>
  ) : (
    <div className="container-loader2">
      <span className="loader2"></span>
    </div>
  );
};
