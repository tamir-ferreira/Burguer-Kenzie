import logo from "../../images/logo.svg";
import { InputSearch } from "../InputSearch";
import { StyledHeader } from "./style";

export const Header = ({ products }) => {
  return (
    <StyledHeader>
      <div className="container">
        <img src={logo} alt="logomarca Burguer Kenzie" />
        <InputSearch products={products} />
      </div>
    </StyledHeader>
  );
};
