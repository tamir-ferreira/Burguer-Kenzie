import { useContext } from "react";
import { AnimBlur, AnimSlideDown, AnimSlideUp } from "../../animation";
import { Cart } from "../../components/Cart";
import { Header } from "../../components/Header";
import { Loader } from "../../components/Loader";
import { ProductList } from "../../components/ProductList";
import { ProductsContext } from "../../context/ProductsContext";
import { UserContext } from "../../context/UserContext";
import { StyledDashboard } from "./style";

export const DashboardPage = () => {
  const { loadUser } = useContext(UserContext);
  const { products, filteredProducts, showCart } = useContext(ProductsContext);

  return !loadUser ? (
    // <>
    <AnimBlur>
      <Header />
      <StyledDashboard>
        <ProductList
          products={filteredProducts.length != 0 ? filteredProducts : products}
        />
        {showCart ? (
          <AnimSlideDown>
            <Cart />
          </AnimSlideDown>
        ) : (
          <AnimSlideUp>
            <Cart />
          </AnimSlideUp>
        )}
      </StyledDashboard>
    </AnimBlur>
  ) : (
    <>
      <Loader />
    </>
  );
};
