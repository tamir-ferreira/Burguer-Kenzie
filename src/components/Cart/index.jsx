import { CartTotal } from "../CartTotal";
import { CartProduct } from "../CartProduct";
import { StyledCart } from "./style";

export const Cart = ({ cartList, setCartList, total, setTotal }) => {
  const cartSum = cartList.reduce((acc, current) => acc + current.price, 0);
  setTotal(cartSum);

  return (
    <StyledCart>
      <div>
        <h4>Carrinho de compras</h4>
      </div>
      {!total && (
        <div>
          <h3>Sua sacola está vazia</h3>
          <p>Adicione itens</p>
        </div>
      )}
      <ul>
        {cartList.map((item) => (
          <CartProduct
            key={item.id}
            item={item}
            cartList={cartList}
            setCartList={setCartList}
          />
        ))}
      </ul>
      {total ? <CartTotal total={total} setCartList={setCartList} /> : ""}
    </StyledCart>
  );
};
