import { StyledInputSearch } from "./style";

import { toast } from "react-toastify";
import { useRef } from "react";

export const InputSearch = ({ products, setFilteredProducts }) => {
  const formRef = useRef(null);
  const findProduct = (event) => {
    event.preventDefault();
    const wordSearch = event.target[0].value.toLowerCase();

    const filteredList = products.filter((item) => {
      return (
        item.category.toLowerCase().includes(wordSearch) ||
        item.name.toLowerCase().includes(wordSearch)
      );
    });

    if (filteredList.length > 0) {
      setFilteredProducts(filteredList);
      filteredList.length == 1
        ? toast.success("1 produto encontrado!")
        : toast.success(`${filteredList.length} produtos encontrados!`);
    } else {
      setFilteredProducts([]);
      toast.error(`Nenhum produto encontrado com "${wordSearch}" !`);
    }
  };

  return (
    <StyledInputSearch ref={formRef} onSubmit={(event) => findProduct(event)}>
      <input
        type="text"
        placeholder="Digitar Pesquisa"
        onFocus={() => formRef.current.classList.add("input-focus")}
        onBlur={() => formRef.current.classList.remove("input-focus")}
        onChange={(event) => !event.target.value && setFilteredProducts([])}
        required
      />
      <button className="btn-medium btn-primary">Pesquisar</button>
    </StyledInputSearch>
  );
};
