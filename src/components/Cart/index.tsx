import { CartTotal } from "../CartTotal";
import { CartProduct } from "../CartProduct";
import { StyledCart } from "./style";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";

export const Cart = () => {
  const { cartList } = useContext(ProductsContext);

  return (
    <StyledCart>
      <div>
        <h4>Carrinho de compras</h4>
      </div>
      {!cartList.length ? (
        <div>
          <h3>Sua sacola está vazia</h3>
          <p>Adicione itens</p>
        </div>
      ) : (
        <ul>
          {cartList.map((cartItem) => (
            <CartProduct key={cartItem.id} item={cartItem} />
          ))}
        </ul>
      )}
      {cartList.length ? <CartTotal /> : ""}
    </StyledCart>
  );
};
