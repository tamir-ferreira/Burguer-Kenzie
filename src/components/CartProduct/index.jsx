import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { StyledCartProduct } from "./style";

export const CartProduct = ({ item }) => {
  const { setCartCounter, cartList, setCartList } = useContext(ProductContext);
  const { img, name, category } = item;

  const removeItem = () => {
    const updatedList = cartList.filter((product) => product.id != item.id);
    setCartList(updatedList);
    setCartCounter(updatedList.length);
  };
  return (
    <StyledCartProduct>
      <div>
        <img
          src={img}
          alt={name}
          className={
            name.includes("Coca") || name.includes("Guaraná")
              ? "resize-img-cart"
              : name.includes("Ovomaltine")
              ? "adjust-img-cart"
              : ""
          }
        />
      </div>
      <div>
        <h4 className="font-heading-4">{name}</h4>
        <span className="caption">{category}</span>
      </div>

      <button className="caption" onClick={() => removeItem()}>
        Remover
      </button>
    </StyledCartProduct>
  );
};
