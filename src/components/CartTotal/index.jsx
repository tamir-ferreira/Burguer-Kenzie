import { StyledCartTotal } from "./style";

export const CartTotal = ({ total, setCartList }) => {
  const formatedTotal = total.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  return (
    <StyledCartTotal>
      <div>
        <h3 className="font-heading-4">Total</h3>
        <span className="font-body-600-gray">{formatedTotal}</span>
      </div>
      <button className="btn-default btn-gray" onClick={() => setCartList([])}>
        Remover Todos
      </button>
    </StyledCartTotal>
  );
};
