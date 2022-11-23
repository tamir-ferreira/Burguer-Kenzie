import { Products } from "../Products";
import { StyledProductList } from "./style";

export const ProductList = ({ products }) => {
  return (
    <StyledProductList>
      <ul>
        {products.map((product) => {
          console.log("saída");
          // <Products key={product.id} product={product} />;
          // Products(product);
        })}
        <Products />
      </ul>
    </StyledProductList>
  );
};
