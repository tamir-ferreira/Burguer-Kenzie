import logo from "../../images/logo.svg";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { InputSearch } from "../InputSearch";
import { StyledHeader } from "./style";
import { FaShoppingCart } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";

export const Header = () => {
  const {
    setWordSearch,
    products,
    setFilteredProducts,
    cartList,
    // cartCounter,
  } = useContext(ProductContext);
  return (
    <StyledHeader>
      <div className="container">
        <img src={logo} alt="logomarca Burguer Kenzie" />
        <div>
          <InputSearch
            setWordSearch={setWordSearch}
            products={products}
            setFilteredProducts={setFilteredProducts}
          />
          <div>
            <FaShoppingCart size={25} color={"var(--color-gray-50)"} />
            <span>{cartList.length}</span>
          </div>
          <TbLogout size={25} color={"var(--color-gray-50)"} />
        </div>
      </div>
    </StyledHeader>
  );
};
