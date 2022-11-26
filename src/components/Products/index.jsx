import { StyledProducts } from "./style";
import { toast } from "react-toastify";

export const Products = ({ product, cartList, setCartList }) => {
  const handleClick = () => {
    const duplicatedItem = cartList.some((item) => item.id === product.id);

    if (!duplicatedItem) {
      setCartList([...cartList, product]);
      toast.success("Enviado para o carrinho!");
    } else {
      toast.error("Produto já está no carrinho!");
    }
  };

  return (
    <StyledProducts>
      <div>
        <img src={product.img} alt={product.name} />
      </div>
      <div>
        <h3 className="font-heading-3">{product.name}</h3>
        <span className="caption">{product.category}</span>
        <h4 className="font-body-600">{`R$ ${product.price}`}</h4>
        <button
          className="btn-medium btn-primary"
          onClick={() => handleClick()}
        >
          Adicionar
        </button>
      </div>
    </StyledProducts>
  );
};
