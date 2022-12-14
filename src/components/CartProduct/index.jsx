import { useContext, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { ProductContext } from "../../context/ProductContext";
import { StyledCartProduct } from "./style";

export const CartProduct = ({ item }) => {
  const { cartList, setCartList } = useContext(ProductContext);
  const { id, name, img, quantity } = item;
  // console.log(id);

  const removeItem = () => {
    const updatedList = cartList.filter((product) => product.id != item.id);
    setCartList(updatedList);
    // setCartCounter(updatedList.length);
  };

  const addItem = () => {
    cartList.map((item) => {
      if (item.id === id) {
        item.quantity += 1;
      }
    });
    const updateList = cartList.map((product) => product);
    setCartList(updateList);
  };

  const subItem = () => {
    cartList.map((item) => {
      if (item.id === id && item.quantity > 1) {
        item.quantity -= 1;
      }
    });
    const updateList = cartList.map((product) => product);
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
