import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { StyledForm } from "../style";

export const FormRegister = () => {
  return (
    <StyledForm>
      <div>
        <h3 className="font-heading-3">Cadastro</h3>
        <Link to={"/"}>
          <span className="font-body">Retornar para o login</span>
        </Link>
      </div>
      <Input type="text" name="Nome" />
      <Input type="email" name="Email" />
      <Input type="password" name="Senha" />
      <Input type="rePassword" name="Confirmar Senha" />
      <Button content="Cadastrar" size="default" color="gray" />
    </StyledForm>
  );
};
