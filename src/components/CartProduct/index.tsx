import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { StyledCartProduct } from "./style";
import { ProductsContext } from "../../context/ProductsContext";
import * as i from "../../interfaces/ProductsInterfaces";

export const CartProduct = ({ cartItem }: i.CartList) => {
  const { cartList, setCartList } = useContext(ProductsContext);
  const { id, name, img, quantity } = cartItem;

  const removeItem = () => {
    const updatedList = cartList.filter((item) => item.id != cartItem.id);
    setCartList(updatedList);
  };

  const addItem = () => {
    cartList.map((item) => {
      if (item.id === id) {
        item.quantity += 1;
      }
    });
    const updateList = cartList.map((item) => item);
    setCartList(updateList);
  };

  const subItem = () => {
    cartList.map((item) => {
      if (item.id === id && item.quantity > 1) {
        item.quantity -= 1;
      }
    });
    const updateList = cartList.map((item) => item);
    setCartList(updateList);
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
        <div>
          <button onClick={() => subItem()}>-</button>
          <span>{quantity}</span>
          <button onClick={() => addItem()}>+</button>
        </div>
      </div>

      <button className="caption" onClick={() => removeItem()}>
        <FaTrash size={20} color={"var(--color-gray-50)"} />
      </button>
    </StyledCartProduct>
  );
};
