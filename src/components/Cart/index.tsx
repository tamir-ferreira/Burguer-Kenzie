import { CartTotal } from "../CartTotal";
import { CartProduct } from "../CartProduct";
import { StyledCart } from "./style";
import { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { AnimSlideDown } from "../../animation";

export const Cart = () => {
  const { cartList, showCart } = useContext(ProductsContext);
  useEffect(() => {
    console.log("montagem");

    return () => {
      console.log("desmontagem");
    };
  }, [showCart]);

  return showCart ? (
    <StyledCart>
      <AnimSlideDown>
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
              <CartProduct key={cartItem.id} cartItem={cartItem} />
            ))}
          </ul>
        )}
        {cartList.length ? <CartTotal /> : ""}
      </AnimSlideDown>
    </StyledCart>
  ) : (
    <></>
  );
};
