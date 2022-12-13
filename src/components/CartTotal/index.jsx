import { Button } from "../Button";
import { StyledCartTotal } from "./style";

export const CartTotal = ({ setCartList, cartList }) => {
  const cartSum = cartList.reduce((acc, current) => acc + current.price, 0);
  const formatedTotal = cartSum.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  return (
    <StyledCartTotal>
      <div>
        <h3 className="font-heading-4">Total</h3>
        <span className="font-body-600-gray">{formatedTotal}</span>
      </div>
      <Button
        size="default"
        color="gray"
        content="Remover Todos"
        onClick={() => setCartList([])}
      />
    </StyledCartTotal>
  );
};
