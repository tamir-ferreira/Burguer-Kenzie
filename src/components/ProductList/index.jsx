import { Products } from "../Products";
import { StyledProductList } from "./style";

export const ProductList = ({ products, cartList, setCartList }) => {
  return (
    <StyledProductList>
      <ul>
        {products.map((product) => (
          <Products
            key={product.id}
            product={product}
            cartList={cartList}
            setCartList={setCartList}
          />
        ))}
      </ul>
    </StyledProductList>
  );
};
