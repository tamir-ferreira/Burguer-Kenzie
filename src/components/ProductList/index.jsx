// import { Product } from "../../Product";
import { Product } from "../Product";
import { StyledProductList } from "./style";
// import "./style.css";

export const ProductList = () => {
  return (
    <StyledProductList>
      <ul>
        <Product />
        <Product />
        <Product />
        <Product />
      </ul>
    </StyledProductList>
  );
};
