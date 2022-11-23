import product from "../../images/product.png";
import { StyledCartProduct } from "./style";

export const CartProduct = () => {
  return (
    <StyledCartProduct>
      <div>
        <img src={product} alt="" />
      </div>
      <div>
        <h4 className="font-heading-4">Hamburguer</h4>
        <span className="caption">Sanduíches</span>
      </div>
      <a className="caption">Remover</a>
    </StyledCartProduct>
  );
};
