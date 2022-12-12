import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { StyledForm } from "./style";

export const FormLogin = () => {
  return (
    <StyledForm>
      <h3 className="font-heading-3">Login</h3>
      <Input type="text" name="Nome" />
      <Input type="password" name="Senha" />
      <Button content="Logar" size="default" color="primary" />

      <p className="font-body-gray">
        Crie sua conta para saborear muitas delícias e matar sua fome!
      </p>
      <Button content="Cadastrar" size="default" color="gray" />
    </StyledForm>
  );
};