import { StyledInput } from "./style";

interface iInputProps {
  type: string;
  name: string;
  register: object;
  error: string | undefined;
}

export const Input = ({ type, name, register, error }: iInputProps) => {
  return (
    <StyledInput>
      <input
        className={error && "input-error"}
        type={type}
        {...register}
        required={true}
      />
      <span>{name}</span>
      {error && (
        <p className="caption" aria-label="erro na validação do campo">
          {error}
        </p>
      )}
    </StyledInput>
  );
};
