import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
import { Cart } from "../../components/Cart";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { ProductContext } from "../../context/ProductContext";
import { UserContext } from "../../context/UserContext";
// import { api, getProducts } from "../../services/api";

export const DashboardPage = () => {
  const { loadUser } = useContext(UserContext);
  const { products, filteredProducts } = useContext(ProductContext);
  // const navigate = useNavigate();

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
