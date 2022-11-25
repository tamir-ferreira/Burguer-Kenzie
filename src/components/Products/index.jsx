import { StyledProducts } from "./style";

export const Products = ({ product, cartList, setCartList }) => {
  const handleClick = () => {
    const duplicatedItem = cartList.some((item) => item.id === product.id);

    duplicatedItem
      ? console.log("item duplicado")
      : setCartList([...cartList, product]);
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
