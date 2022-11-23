import { StyledCartTotal } from "./style";
// import "./style.css";

export const CartTotal = () => {
  return (
    <StyledCartTotal>
      {/* <div> */}
      <div>
        <h3 className="font-heading-4">Total</h3>
        <span className="font-body-600-gray">R$ 40,00</span>
      </div>
      <button className="btn-default btn-gray">Remover Todos</button>
      {/* </div> */}
    </StyledCartTotal>
  );
};
