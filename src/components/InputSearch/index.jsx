import { StyledInputSearch } from "./style";

export const InputSearch = ({ products, setFilteredProducts }) => {
  const findProduct = (event) => {
    event.preventDefault();
    // console.log("teste");
    const wordSearch = event.target[0].value.toLowerCase();

    const filteredList = products.filter((item) => {
      return (
        item.category.toLowerCase().includes(wordSearch) ||
        item.name.toLowerCase().includes(wordSearch)
      );
    });

    setFilteredProducts(filteredList);
  };

  const clearList = () => {};

  return (
    <StyledInputSearch onSubmit={(event) => findProduct(event)}>
      <input
        type="text"
        placeholder="Digitar Pesquisa"
        required
        onChange={(event) => !event.target.value && setFilteredProducts([])}
      />
      <button className="btn-medium btn-primary">Pesquisar</button>
    </StyledInputSearch>
  );
};
