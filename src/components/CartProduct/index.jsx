import { StyledCartProduct } from "./style";

export const CartProduct = ({ item, cartList, setCartList }) => {
  const { img, name, category } = item;

  const removeItem = () => {
    // console.log(cartList);
    const updatedList = cartList.filter((product) => product.id != item.id);
    setCartList(updatedList);
  };
  return (
    <StyledCartProduct>
      <div>
        <img src={img} alt={name} />
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
