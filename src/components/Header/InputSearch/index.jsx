import { StyledInputSearch } from "./style";

export const InputSearch = () => {
  return (
    <StyledInputSearch>
      <input type="text" placeholder="Digitar Pesquisa" />
      <button className="btn-medium btn-primary">Pesquisar</button>
    </StyledInputSearch>
  );
};
