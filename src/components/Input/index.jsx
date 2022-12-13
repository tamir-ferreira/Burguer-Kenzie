import { StyledInput } from "./style";

export const Input = ({ type, name, register, error }) => {
  return (
    <StyledInput>
      <input type={type} placeholder={name} {...register} />
      <legend className="caption">{name}</legend>
      {error && (
        <p className="caption" aria-label="erro na validação do campo">
          {error}
        </p>
      )}
    </StyledInput>
  );
};
