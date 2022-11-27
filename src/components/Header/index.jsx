import logo from "../../images/logo.svg";
import { InputSearch } from "../InputSearch";
import { StyledHeader } from "./style";

export const Header = ({ setWordSearch, products, setFilteredProducts }) => {
  return (
    <StyledHeader>
      <div className="container">
        <img src={logo} alt="logomarca Burguer Kenzie" />
        <InputSearch
          setWordSearch={setWordSearch}
          products={products}
          setFilteredProducts={setFilteredProducts}
        />
      </div>
    </StyledHeader>
  );
};
