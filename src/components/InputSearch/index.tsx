import { StyledInputSearch } from "./style";
import { toast } from "react-toastify";
import { useContext, useRef } from "react";
import { Button } from "../Button";
import { ImSearch } from "react-icons/im";
import { ProductsContext } from "../../context/ProductsContext";

export const InputSearch = () => {
  const { setWordSearch, products, setFilteredProducts } =
    useContext(ProductsContext);
  const formRef = useRef(null);

  const findProduct = (event) => {
    event.preventDefault();
    const search = event.target[0].value.toLowerCase();

    const filteredList = products.filter((item) => {
      return (
        item.category.toLowerCase().includes(search) ||
        item.name.toLowerCase().includes(search)
      );
    });

    if (filteredList.length > 0) {
      setFilteredProducts(filteredList);
      setWordSearch(search);
      filteredList.length == 1
        ? toast.success("1 produto encontrado!")
        : toast.success(`${filteredList.length} produtos encontrados!`);
    } else {
      setFilteredProducts([]);
      setWordSearch("");
      toast.error(`Nenhum produto encontrado com "${search}" !`);
    }
  };

  const hideResults = (event) => {
    if (!event.target.value) {
      setWordSearch("");
      setFilteredProducts([]);
    }
  };

  return (
    <StyledInputSearch ref={formRef} onSubmit={(event) => findProduct(event)}>
      <input
        type="text"
        placeholder="Digitar Pesquisa"
        onFocus={() => formRef.current.classList.add("input-focus")}
        onBlur={() => formRef.current.classList.remove("input-focus")}
        onChange={(event) => hideResults(event)}
        required
      />
      <Button size="medium" color="primary" content={<ImSearch size={18} />} />
    </StyledInputSearch>
  );
};
