import "./style.css";
import product from "../../../images/product.png";
export const Product = () => {
  return (
    <li>
      <div>
        <img src={product} alt="" />
      </div>
      <div>
        <h3 className="font-heading-3">Hamburguer</h3>
        <span className="caption">Sanduíches</span>
        <h4 className="font-body-600">R$ 14,00</h4>
        <button className="btn-medium btn-primary">Adicionar</button>
      </div>
    </li>
  );
};
