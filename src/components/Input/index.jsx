import { StyledInput } from "./style";

export const Input = ({ type, name, register, error }) => {
  return (
    <StyledInput>
      <input
        className={error && "input-error"}
        type={type}
        {...register}
        required="required"
      />
      {/* <legend className="caption">{name}</legend> */}
      <span>{name}</span>
      {error && (
        <p className="caption" aria-label="erro na validação do campo">
          {error}
        </p>
      )}
    </StyledInput>
  );
};
