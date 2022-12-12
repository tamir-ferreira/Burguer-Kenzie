import { StyledInput } from "./style";

export const Input = ({ type, name }) => {
  return (
    <StyledInput>
      <input type={type} placeholder={name} />
      <legend className="caption">{name}</legend>
    </StyledInput>
  );
};
