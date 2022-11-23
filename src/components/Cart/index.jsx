import "./style.css";
import { CartTotal } from "../CartTotal";
import { CartProduct } from "../CartProduct/index.jsx";

export const Cart = () => {
  return (
    <>
      <div>
        <h4>Carrinho de compras</h4>
      </div>
      <div>
        <h3>Sua sacola está vazia</h3>
        <p>Adicione itens</p>
      </div>
      <ul>
        <CartProduct />
        <CartProduct />
        <CartProduct />
      </ul>
      <CartTotal />
    </>
  );
};
