import { StyledProducts } from "./style";
import { toast } from "react-toastify";

export const Products = ({ product, cartList, setCartList }) => {
  const { img, name, category, price } = product;
  const formatedPrice = price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  const addProduct = () => {
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
        <img
          src={img}
          alt={name}
          className={
            name.includes("Coca") || name.includes("Guaraná")
              ? "resize-img"
              : name.includes("Ovomaltine")
              ? "adjust-img"
              : ""
          }
        />
      </div>
      <div>
        <h3 className="font-heading-3">{name}</h3>
        <span className="caption">{category}</span>
        <h4 className="font-body-600">{formatedPrice}</h4>
        <button className="btn-medium btn-primary" onClick={() => addProduct()}>
          Adicionar
        </button>
      </div>
    </StyledProducts>
  );
};
