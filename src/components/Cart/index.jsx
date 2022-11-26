import { CartTotal } from "../CartTotal";
import { CartProduct } from "../CartProduct";
import { StyledCart } from "./style";

export const Cart = ({ cartList, setCartList }) => {
  // console.log(cartList);
  return (
    <StyledCart>
      <div>
        <h4>Carrinho de compras</h4>
      </div>
      {!cartList.length && (
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
      {cartList.length ? (
        <CartTotal setCartList={setCartList} cartList={cartList} />
      ) : (
        ""
      )}
    </StyledCart>
  );
};
