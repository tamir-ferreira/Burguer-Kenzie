import { useContext } from "react";
import { ProductContext } from "../../context/ProductsContext";
import { Button } from "../Button";
import { Products } from "../Products";
import { StyledProductList } from "./style";

export const ProductList = ({ products }) => {
  const { wordSearch, cleanSearch } = useContext(ProductContext);
  return (
    <StyledProductList>
      {wordSearch && (
        <div className="result">
          <h2 className="font-heading-1">
            Resultados para: <span className="font-gray"> {wordSearch} </span>
          </h2>
          <Button
            size="medium"
            color="primary"
            content="Limpar busca"
            onClick={() => cleanSearch()}
          />
        </div>
      )}
      <ul>
        {products.map((product) => (
          <Products key={product.id} product={product} />
        ))}
      </ul>
    </StyledProductList>
  );
};
